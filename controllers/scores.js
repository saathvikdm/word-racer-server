const Score = require("../models/score");

const saveScore = async (req, res) => {
  const score = new Score({
    username: req.body.username,
    score: req.body.score,
    level: req.body.level,
  });
  try {
    const newScore = await score.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getHighScores = async (req, res) => {
  try {
    const scores = await Score.find({}, null, {
      sort: { score: -1 },
      limit: 5,
    });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { saveScore, getHighScores };
