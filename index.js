const express = require ("express")
const app  = express();
const cors = require("cors")
const mongoose = require('mongoose');
const connect = require("./db/mongodb")
const Performance = require("./db/schemas/Performance")

const{signup,signin} = require("./controllers/authController")

const {encryptPassword} = require("./middlewares/middleware")


const URL = "mongodb+srv://vighneshwars10:NvIMpTQk9Lndk1WB@cluster0.ccexfxp.mongodb.net/"




app.use(express.json());
app.use(cors())

app.post("/createUser",encryptPassword,signup)

app.post("/login",signin)

app.get("/getData",(req,res)=> {
    Performance.find().then(data=> {
        res.json({
            data
        })
    })
})



connect(URL).then(data => {
    console.log("database connected")
  }).catch(err=> {
    console.log(err)
  })

  app.listen(8090,()=> {
    console.log("server connected at 8090")
  })

