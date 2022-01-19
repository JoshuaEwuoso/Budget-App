const express = require("express");
const transactions = express.Router();
const transacArray = require("../models/transactions");

transactions.get("/", (request, response) => {
    response.json(transactionArray);
});

transactions.get("/:id", (request, response) => {
    const { id } = request.params;
    if(transacArray[id]){
        response.json(transacArray[id]);
    } else {
        response.redirect("*");
    }
});

transactions.put("/:id", async (request, response) => {
    const { id } = request.params;
    transacArray[id] = request.body;
    response.status(200).json(transacArray[id]);
  });
  
  
transactions.post("/", (request, response) => {
    const updatedArray = transacArray.push(request.body);
    response.json(transacArray[updatedArray - 1]);
  });
  

transactions.delete("/:id", (request, response) => {
    const { id } = request.params;
    const deletedTransac = transacArray.splice(id, 1);
    response.status(200).json(deletedTransac);
  });

module.exports = transactions;