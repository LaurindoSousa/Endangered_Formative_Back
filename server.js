const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();

app.use (cors());
app.use(express.json());

app.get("/", (req, res) => {

});

app.delete("/animals/:id", (req,res) => {
    console.log(req.params.id);
    
    const rawData = fs.readFileSync("./data.json");
    const data = JSON.parse(rawData);
    const matchIndex = data.animals.findIndex((animals) => {
        return animals.id === req.params.id;
    });
    
    data.animals.splice(matcIndex, 1);
    
    const newJson = JSON.stringify(data);
    fs.writeFileSync("./data.json", newJson);
    
    res.send("deleted: " + req.params.id);
});


app.listen(3000, () => {
    console.log("Listening to port 3000")
});