const mongoose =require('mongoose')
const studentschema = new mongoose.Schema({
  name: String,
  age: Number,
});
// model -collection-name
exports.student_data = mongoose.model("student", studentschema);

