const mongoose =require('mongoose')
// scheme -structure
const studentschema = new mongoose.Schema({
  name: String,
  admissionNo: Number,
  rollNo:String,
  email:String,
  phoneNo:Number,
  age:Number,
  gender:String,
  department:String,
  address:String,
  fees:String,
  imageURl:String,
  imageName:String
});
// model -collection-name
exports.student_data = mongoose.model("student", studentschema);


