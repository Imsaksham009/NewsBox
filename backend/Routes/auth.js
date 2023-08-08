const express = require("express");
const User = require("../Database/Models/User");
const routes = express.Router();
const validateUserBody = require("../middleware/validateUser");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Saksham@Boy_1234";
const saltRounds = 10;



routes.post("/register", validateUserBody, async (req, res) => {
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        if (foundUser) {
            return res.status(400).json({ error: "User with emailID already exist" });
        }
        const { name, email, password } = req.body;

        const genSecPass = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            email,
            password: genSecPass
        });
        const saveUser = await newUser.save();
        const data = {
            user: {
                id: saveUser.id
            }
        };
        const token = jwt.sign(data, JWT_SECRET);
        res.status(200).json({ token });
    } catch (e) {
        console.log("e");
    }
});


module.exports = routes;