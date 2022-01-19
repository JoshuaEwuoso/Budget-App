const express = require("express");
const transactions = express.Router();
const transactionArray = require("../models/transactions");

transactions.get("/", (request, response) => {
    response.json(transactionArray);
});

transactions.get("/:id", (request, response) => {
    const { id } = request.params;
    if(transactionArray[id]){
        response.send(transactionArray[id]);
    } else {
        response.redirect("*");
    }
});


module.exports = transactions;