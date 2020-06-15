const videosModel = require('../modelsDB/videosModel');
const parseToString = require('../funcArrayToString/parseToString');

let convertVideos = async () => {
  for await (const video of videosModel.find()) {
    video.description = parseToString(video.description);
    await video.save();
  }
}

module.exports = convertVideos;