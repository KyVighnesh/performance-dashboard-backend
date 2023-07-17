const {createUser,getUserByUsername} = require("../db/db")
const  jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signup=(req,res,next)=>{

    createUser(req.body).then(result=>{
     res.json({
         status:"Success",
         messag:"User Created"
 
     })
    }).catch(err=>{
 
     
 
     next(new Error("User Already Exists"))
 
 
    })
 
 
    
 }

 

 const signin = (req,res,next) => {
    getUserByUsername(req.body.email).then(user=>{
       if(user){
          // for the password comparison

          bcrypt.compare(req.body.password, user.password, function(err, result) {
           if(!result){
               next(new Error("Please enter correct username or password"))
           }else{
               const  token = jwt.sign({username:req.body.username}, "shhh");
           res.json({
                status:"Success",
                token:token,
                message:"User Logged In"
        
            })

             process.env.USERNAME = req.body.email

             console.log(process.env.USERNAME)


             
           }
       
       });

          
       }else{



         
           next(new Error("User Not found"));
       }

   })

}


module.exports = {
    signup,
    signin,

}