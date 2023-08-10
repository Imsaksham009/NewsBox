const express = require("express");
const User = require("../Database/Models/User");
const routes = express.Router();
const { validateRegisterUserBody, validateLoginUserBody, fetchUserDetails } = require("../middleware/validateUser");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Saksham@Boy_1234";
const saltRounds = 10;



routes.post("/register", validateRegisterUserBody, async (req, res) => {
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

        const payload = {
            user: {
                id: saveUser.id
            }
        };
        const token = jwt.sign(payload, JWT_SECRET);
        res.status(200).json({ token });
    } catch (e) {
        console.log("e");
    }
});

routes.post("/login", validateLoginUserBody, async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ error: { message: "Enter the correct credentials." } });
        }

        const authenticateUser = await bcrypt.compare(password, foundUser.password);

        if (!authenticateUser) {
            return res.status(400).json({ error: { message: "Enter the correct credentials." } });
        }

        const payload = {
            user: {
                id: foundUser.id
            }
        };
        const token = jwt.sign(payload, JWT_SECRET);
        // res.setHeader("auth-token", token);
        res.status(200).json({ token });

    } catch (e) {
        console.log("e");
        res.status(400).send("Internal error occured");

    }
});

routes.post("/getuser", fetchUserDetails, async (req, res) => {
    try {
        const userid = req.user.id;
        const foundUser = await User.findById(userid).select("-password");
        res.status(200).json(foundUser);
    } catch (error) {
        console.error(error);
        res.status(400).send("Internal Error");
    }

});




module.exports = routes;