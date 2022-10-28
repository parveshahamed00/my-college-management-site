const mongoose = require("mongoose");
// scheme -structure
const attendanceschema = new mongoose.Schema({
attendance:Number,
name:String,
department:String,
rollNo:String
});
// model -collection-name
exports.attendance = mongoose.model("attendance", attendanceschema);
