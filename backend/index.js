const express = require("express"); // to use the expressJS in this file 
const mongoose = require("mongoose");//req mongoose 
require("dotenv").config();
const app = express();      // to get all the functionality of express into a variable named app
const port = 8000;          // to listen the request form client on port 8000 

//conneting MONGODB with our node app 
//STORE THE PASSWORD IN .ENV FILE AND THEN USE PROCESS.ENV.PASSWORD TO ACQUIRE THAT PASSWORD
mongoose
    .connect("mongodb+srv://abhijeetkofficial:"
            +process.env.MONGO_PASSWORD
            +"@spotifydb.gf2kqfk.mongodb.net/?retryWrites=true&w=majority",
        {
         useNewUrlParser:true,
         useUnifiedTopology:true,
        }
    )
    .then((x)=> {
        console.log("CONNNECTED WITH MONGODB!!!");
    })
    .catch((err)=>{
        console.log("Failed to connect with DB!!");
    });

app.get("/", (req, res) => {
    // req contains all data for response
    // res contains all data for request
    res.send("Hello World");
});


//tell express that server will run on localhost:8000 
app.listen(port, ( ) =>{
    console.log("APP IS RUNNING ON PORT " + port);
});