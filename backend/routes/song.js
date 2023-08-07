const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");
const { route } = require("./song");

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { name, thumbnail, track } = req.body;
        if (!name || !thumbnail || !track) {
            return res.status(301).json({ err: "Insufficient data" });
        }
        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist };
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
);


//get routes to get all songs that i have published
router.get(
    "/get/mysongs",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        //we have to get all songs where artist id == currentUser._id
        const songs = await Song.find({ artist: req.user._id });
        return res.status(200).json({ data: songs });

    }
);

// route to get all song that any artist has published by the artist id 
route.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { artistId } = res.params;
        // while artist does not exist
        const artist = await User.find({ _id: artistId });
        if (!artist) {
            return res.status(301).json({ err: "Artist does not EXIST!" });
        }
        const songs = await Song.find({ artist: artistId });
        return res.status(200).json({ data: songs });
    }
);

//route to get single song by name
route.get(
    "/get/songname/:songName",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { songName } = req.params;
        const songs = await Song.find({ name: songName });
        return res.status(200).json({ data: songs });
    }
);
module.exports = router;
