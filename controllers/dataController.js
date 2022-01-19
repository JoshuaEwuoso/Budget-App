const express = require("express");
const transaction = express.Router();
const transactionArray = require("../models/transaction");

transaction.get("/", (request, response) => {
    response.json(transactionArray);
});

module.exports = transaction;