const mongoose = require ('mongoose');

const glossariesSchema = new mongoose.Schema({
  category: String,
  term: String,
  definition: [] | String,
  language: String,
});


module.exports = mongoose.model('glossaries', glossariesSchema);