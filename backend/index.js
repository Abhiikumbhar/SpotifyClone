const express = require("express"); // to use the expressJS in this file 
const app = express();      // to get all the functionality of express into a variable named app
const port = 8000;          // to listen the request form client on port 8000 

app.get("/", (req, res) => {
    // req contains all data for response
    // res contains all data for request
    res.send("Hello World");
});


//tell express that server will run on localhost:8000 
app.listen(port, ( ) =>{
    console.log("APP IS RUNNING ON PORT " + port);
});