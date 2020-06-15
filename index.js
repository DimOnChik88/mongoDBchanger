const mongoose = require('mongoose');

let convertArticles = require('./converters/convertArticles');
let convertVideos = require('./converters/convertVideos');
let convertGlossaries = require('./converters/convertGlossaries');
let convertQuestions = require('./converters/convertQuestions');



async function  changer() {
try {
  await mongoose.connect('mongodb://localhost:27017/msd-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await convertArticles();
  await convertVideos();
  await convertGlossaries();
  await convertQuestions();

  await mongoose.close
  await mongoose.disconnect();
} catch (e) {
  console.log(e);
}
 }

 changer().then(()=> console.log('Done'));