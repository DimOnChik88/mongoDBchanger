const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema({
  category: String,
  description: [] | String,
  picture: String,
  title: String,
  author: String,
  preview_description: String,
  language: String,
});



module.exports = mongoose.model('articles', articlesSchema);