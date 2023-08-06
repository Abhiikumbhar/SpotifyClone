const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

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
    "/get/playlist/:playlistId",
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

//3. get all playlist by an artist 
router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const artistId = res.params.artistId;
        const artist = await User.findOne({ _id: artistId });
        if (!artist) {
            return res.status(304).json({ err: "invalid Artist ID" });
        }
        const playlist = await Playlist.find({ owner: artistId });
        return res.status(200).json({ data: playlist });
    }
);


//4.add song to playlist
router.post(
    "/add/song",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const currentUser = req.user;
        const { playlistId, songId } = req.body;

        //check does the playlist exist
        const playlist = await Playlist.findOne({ _id: playlistId });
        if (!playlist) {
            return res.status(304).json({ err: "invalid playlist ID" });
        }
        
        //check if user allowed to add song in playlist 
        if (playlistId != currentUser._id && !playlist.collaborators.includes(currentUser._id)) {
            return res.status(400).json({ err: "Not Allowed to add in this playlist" });
        }

        //check does the song exist
        const song = await Song.findOne({ _id: songId });
        if (!song) {
            return res.status(304).json({ err: "Song does not exist" });
        }

        //add the song in playlist
        playlist.song.push(songId);
        await playlist.save();

        return res.status(200).json(playlist);
    }
);
module.exports = router;