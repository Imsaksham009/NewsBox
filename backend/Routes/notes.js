const express = require("express");
const { fetchUserDetails, validateNoteUserBody } = require("../middleware/validateUser");
const Notes = require("../Database/Models/Notes");
const routes = express.Router();


routes.get("/getallnotes", fetchUserDetails, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.status(200).json(notes);
});

routes.post("/addnote", fetchUserDetails, validateNoteUserBody, async (req, res) => {
    const { title, description } = req.body;
    try {
        const newNote = new Notes({
            user: req.user.id,
            title,
            description,
        });
        const no = await newNote.save();
        res.status(200).json(no);

    } catch (e) {
        console.error(e);
        res.status(400).send("Internal Error");
    }
});

routes.put("/edit/:id", fetchUserDetails, validateNoteUserBody, async (req, res) => {
    const noteId = req.params.id;
    const { title, description } = req.body;
    try {
        const foundNote = await Notes.findById(noteId);
        if (foundNote && foundNote.user.toString() == req.user.id) {
            await foundNote.updateOne({ title, description });
            res.status(200).json(foundNote);
        }
        else {
            res.status(401).json({ error: { message: "Not Found" } });
        }
    } catch (e) {
        console.error(e);
        res.status(400).send("Internal Error");
    }
});

routes.delete("/delete/:id", fetchUserDetails, async (req, res) => {
    const noteId = req.params.id;
    try {
        const foundNote = await Notes.findById(noteId);
        if (foundNote && foundNote.user.toString() == req.user.id) {
            await Notes.deleteOne({ _id: noteId });
            res.status(200).json({ message: { success: "Note deleted Successfully" } });
        }
        else {
            res.status(401).json({ error: { message: "Not Found" } });
        }
    } catch (e) {
        console.error(e);
        res.status(400).send("Internal Error");
    }
});


module.exports = routes;