const express = require("express");
const connectToDB = require("./Database/db");
const app = express();
const cors = require('cors');

const port = 8080;
connectToDB();

//middlewares

app.use(express.json());
app.use(cors());


//routes
app.use("/api/notes", require("./Routes/notes"));
app.use("/api/auth", require("./Routes/auth"));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});