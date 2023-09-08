const express = require("express"); // to use the expressJS in this file 
const mongoose = require("mongoose");//req mongoose 
require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt; // importing passportJWT for authentication
const passport = require("passport"); //importing passportJWT for authentication
const User = require("./models/User");  //importing User module 
const authRoutes = require("./routes/auth"); //importing auth.js
const songRoutes = require("./routes/song"); //importing song.js
const playlistRoutes = require("./routes/playlist"); //importing playlist.js
const app = express();      // to get all the functionality of express into a variable named app
const port = 8080;          // to listen the request form client on port 8000
const cors = require('cors');

app.use(cors());
app.use(express.json());

//conneting MONGODB with our node app 
//STORE THE PASSWORD IN .ENV FILE AND THEN USE PROCESS.ENV.PASSWORD TO ACQUIRE THAT PASSWORD
mongoose
    .connect("mongodb+srv://abhijeetkofficial:"
        + process.env.MONGO_PASSWORD
        + "@spotifydb.gf2kqfk.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((x) => {
        console.log("Connected to the DATABASE!!!");
    })
    .catch((err) => {
        console.log("Failed to connect with DB!!");
    });


//setting passport-JWT for authentication

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/", (req, res) => {
    // req contains all data for response
    // res contains all data for request
    res.send("Hello World");
});


app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

//tell express that server will run on localhost:8000 
app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT " + port);
});
