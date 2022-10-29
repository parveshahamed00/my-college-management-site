const mongoose = require("mongoose");
// scheme -structure
const timetableschema = new mongoose.Schema({
  examName: String,
  imageURl: String,
  imageName: String
});
// model -collection-name
exports.timeTable = mongoose.model("timetable", timetableschema);
