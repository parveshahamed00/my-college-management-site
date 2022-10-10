const mongoose =require('mongoose')
const studentschema = new mongoose.Schema({
  name: String,
  age: Number,
});
// model -collections
const student_data = mongoose.model("student", studentschema);
// document
exports.student = new student_data({
  name: "Khan",
  age: 8,
});
