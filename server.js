const express = require("express");
const cors = require("cors");
const fs = require('fs');

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use (cors());
app.use(express.json());

app.get("/animals", (req, res) => {
const rawData = fs.readFileSync("./data.json");

const data = JSON.parse(rawData);
 //console.log(data.animals);
res.json(data.animals);
});

app.listen(3000, () => {
    console.log("Listening to port 3000")
});