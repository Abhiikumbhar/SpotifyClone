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


router.post("/login", async (req, res) =>{
    //1.get email, password send by user from in req.body
    const {email,password} = req.body;

    //2. check whether the email is exist or not , if not the credential are wrong
    const user = await User.findOne({email: email});
    if(!user){
        return res.status(402).json({err:"Invalid Credentials !!"});
    }
    //3. if user is exist then check for passwrod, if not the   credential are wrong
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(402).json({err: "Invalid credentials !!"});
    }
    //4. if credential are exist then return the token to user 
    const token = await getToken(user.email, user);

    //return the result to the user
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
})
module.exports = router;