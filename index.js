const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const categories = require("./data/categories.json")

app.get("/", (req, res) => {
    res.send("app is running")
})
app.get("/news-categories", (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})