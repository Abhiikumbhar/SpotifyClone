//req mongoose 
const mongoose = require("mongoose");

//create a mongoose schema of Song
const Song = new mongoose.Schema({
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

//create a model of Song 
const SongModel = mongoose.model("Song", Song);

//export the Song model
module.exports = SongModel;