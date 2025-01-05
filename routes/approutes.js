const guessedNumberController = require("../controllers/guess-number-controller.js");

const express = require("express");

const router = express.Router();

router.get("/getNumber", guessedNumberController.giveNumber);

router.post("/guessedNumber/", guessedNumberController.guessedNumber);

module.exports = router;
