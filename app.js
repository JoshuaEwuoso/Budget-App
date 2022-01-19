const dataController = require("./controllers/dataController");
const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Welcome to the Budget App!");
});

app.use("/transactions", dataController);

app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
});


module.exports = app;