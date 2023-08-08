const express = require("express");
const routes = express.Router();

routes.get("/getnotes", (req, res) => {
    res.status(200).json({
        name: "Saksham",
        age: 22,
        gender: "Male"
    });

});


routes.post("/getnotes", (req, res) => {
    const gotRes = req.body;
    res.json(gotRes);
});


module.exports = routes;