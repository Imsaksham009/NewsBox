const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            default: "General"
        },
        date: {
            type: Date,
            default: Date.now
        },
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User"
        // }
    }
);

module.exports = mongoose.model("Note", NoteSchema);