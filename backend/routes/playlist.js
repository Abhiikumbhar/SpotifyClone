const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");

const router = express.Router();

//1.create a playlist

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const currentUser = req.user;
        const { name, thumbnail, songs } = req.nody;
        if (!name || !thumbnail || !songs) {
            return res.send(301).json({ err: "Insufficient Data" });
        }
        const playlistData = {
            name,
            thumbnail,
            songs,
            owner: currentUser._id,
            collaborators: [],
        };
        const playlist = await Playlist.create(playlistData);
    }

);



//2. get a playlist by ID
router.get(
    "/get/:playlistId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const playlistId = req.params.playlistId;
        const playlist = await Playlist.findOne({ _id: playlistId });
        if (!playlist) {
            return res.status(301).json({ err: "Invalid ID!" });
        }
        return res.status(200).json(playlist);
    }
);
module.exports = router;