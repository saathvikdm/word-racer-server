const express = require("express");
const router = express.Router();
const Score = require("../models/score");

const {
  saveScore,
  getScores,
  getHighScores,
} = require("../controllers/scores.js");

router.post("/", saveScore);

router.get("/", getHighScores);

router.get("/all", getScores);

module.exports = router;
