const mongoose = require("mongoose");


const dbURL = "mongodb://127.0.0.1:27017/iNotebook";


const connectToDB = () => {
    mongoose
        .set("strictQuery", false)
        .connect(dbURL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((e) => console.log(e));


};

module.exports = connectToDB;