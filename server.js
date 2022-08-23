const express = require("express");
const cors = require("cors");
const fs = require('fs');
const { ppid } = require("process");
const app = express();

app.use (cors());
app.use(express.json());

app.get("/", (req, res) => {

});

app.listen(3000, () => {
    console.log("Listening to port 3000")
});