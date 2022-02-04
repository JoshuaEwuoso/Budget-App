const express = require("express");
const transactions = express.Router();
const transacArray = require("../models/transactions");

transactions.get("/", (request, response) => {
    response.json(transacArray);
});

transactions.get("/:index", (request, response) => {
    const { index } = request.params;
    if(transacArray[index]){
        response.json(transacArray[index]);
    } else {
        response.redirect("*");
    }
});

transactions.put("/:index", async (request, response) => {
    const { index } = request.params;
    transacArray[index] = request.body;
    response.status(200).json(transacArray[index]);
  });
  

transactions.post("/", (request, response) => {
    const updatedArray = transacArray.unshift(request.body);
    response.json(transacArray[updatedArray - 1]);
  });

transactions.delete("/:index", (request, response) => {
    const { index } = request.params;
    const deletedTransac = transacArray.splice(index, 1);
    response.status(200).json(deletedTransac);
  });

module.exports = transactions;