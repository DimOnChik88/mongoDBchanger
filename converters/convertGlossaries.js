const glossariesModel = require('../modelsDB/glossariesModel');
const parseToString = require('../funcArrayToString/parseToString');

let convertGlossaries = async () => {
  for await (const glossary of glossariesModel.find()) {
    glossary.definition = parseToString(glossary.definition);
    await glossary.save();
  }
}

module.exports = convertGlossaries;