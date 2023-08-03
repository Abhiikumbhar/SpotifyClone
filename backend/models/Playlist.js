//req mongoose 
const mongoose = require("mongoose");

//create a mongoose schema of Playlist
const Playlist = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String,
        require: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "Song",
    },],
    collaborator: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },],

});

//create a model of Playlist 
const PlaylistModel = mongoose.model("Playlist", Playlist);

//export the Playlist model
module.exports = PlaylistModel;