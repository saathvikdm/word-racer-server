const express = require("express");
const router = express.Router();
const Score = require("../models/score");

const { saveScore, getHighScores } = require("../controllers/scores.js");

router.post("/", saveScore);

router.get("/", getHighScores);

module.exports = router;
