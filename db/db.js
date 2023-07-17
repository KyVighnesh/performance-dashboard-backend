const User=require("./schemas/User");



const createUser = (userinfo)=> {

  return new Promise((res,rej)=>{


  User.findOne({username:userinfo.email}).then(data=> {

    if(data) {
      rej("user already exists")
    }

    else {
      const user = new User(userinfo)


      res(user.save())
    }


    
  })
  })
}

const getUserByUsername=(data)=>{

    return User.findOne({email:data});

}


module.exports = {
    createUser,
    getUserByUsername,
  }