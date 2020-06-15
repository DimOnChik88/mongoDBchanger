const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  category: String,
  question: String,
  answer: [] | String,
  language: String,
});


module.exports = mongoose.model('questions', questionsSchema);