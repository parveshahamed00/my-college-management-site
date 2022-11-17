const mongoose = require("mongoose");
// scheme -structure
const examMarkSchema = new mongoose.Schema({
  imageURL: String,
  name: String,
  rollNo: String,
  department:String,
  date: Array,
  subCode: Array,
  subName: Array,
  marks:Array
});
// model -collection-name
exports.examMarks = mongoose.model("exam-mark", examMarkSchema);
