const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { name, thumbnail, track } = req.body;
        if (!name || !thumbnail || !track) {
            return res.status(301).json({ err: "Insufficient data" });
        }
        const artist = req.user._id;
        const songDetails = { email, thumbnail, track, artist };
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
);

module.exports = router;
