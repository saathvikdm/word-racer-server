const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Score', scoreSchema)