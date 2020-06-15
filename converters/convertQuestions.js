const questionsModel = require('../modelsDB/questionsModel');
const parseToString = require('../funcArrayToString/parseToString');

let convertQuestions = async () => {
  for await (const question of questionsModel.find()) {
    question.answer = parseToString(question.answer);
    await question.save();
  }
}

module.exports = convertQuestions;