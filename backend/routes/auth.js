const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");


router.post("/register", async (req, res) => {
    //this code will run when client request for /register API as POST request
    //req.body will be of format {email, password, firstName, lastName, username}

    const { email, password, firstName, lastName, username } = req.body;

    //find that does the user already exits 
    const user = await User.findOne({ email: email });
    if (user) {
        return res
            .status(403)
            .json({ error: "The user is already exist" });
    }

    //if existing user not found register the new user
    //first we have to incrypt the password to store securely in the database
    const hashedPassword = bcrypt.hash(password, 10);
    const newUserData = { email, password: hashedPassword, firstName, lastName, username };
    const newUser = await User.create(newUserData);

    // we want to create the token to return to user 
    const token = await getToken(email, newUser);

    //return the result to the user
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});