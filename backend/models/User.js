//req mongoose 
const mongoose = require("mongoose");

//create a mongoose schema of user
const User = new mongoose.Schema({
    firstName:
    {
        type: String,
        require: true,
    },
    lastName:
    {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    likedSongs:
    {
        type: String,
        default: "",
    },
    likedPlaylists:
    {
        type: String,
        default: "",
    },
    subscribedArtists:
    {
        type: String,
        default: "",
    },
});

//create a model of user 
const UserModel = mongoose.model("User", User);

//export the user model
module.exports = UserModel;