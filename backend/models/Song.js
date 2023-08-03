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
    track: {
        type: String,
        require: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

//create a model of Song 
const SongModel = mongoose.model("Song", Song);

//export the Song model
module.exports = SongModel;