const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
  category: String,
  url: String,
  title: String,
  author: String,
  preview_description: String,
  description: [] | String,
  duration: String,
  language: String,
});

module.exports = mongoose.model('videos', videosSchema);