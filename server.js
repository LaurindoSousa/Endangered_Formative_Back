const express = require("express");
const cors = require("cors");
const fs = require('fs');

const { v4:uuidv4 } = require('uuid');


const app = express();

app.use (cors());
app.use(express.json());

app.get("/animals", (req, res) => {


const rawData = fs.readFileSync("./data.json");


const data = JSON.parse(rawData);
 //console.log(data.animals);
 res.json(data.animals);
});

app.post("/animals", (req, res) => {
    const rawData = fs.readFileSync("./data.json");
    const data = JSON.parse(rawData);
    req.body.id = uuidv4();
    data.animals.push(req.body);

    const newJson = JSON.stringify(data);
    fs.writeFileSync("./data.json", newJson);

    res.send(req.body);
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
});