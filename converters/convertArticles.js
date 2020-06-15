const articlesSchema = require('../modelsDB/articlesModel');
const parseToString = require('../funcArrayToString/parseToString');

let convertArticles = async () => {

   for await (const article of articlesSchema.find()) {
     article.description = parseToString(article.description);
     await article.save();
   }
}

module.exports = convertArticles;