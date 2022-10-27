const mongoose = require("mongoose");
// scheme -structure
const attendanceschema = new mongoose.Schema({
attandance:Number,
name:String,
department:String
});
// model -collection-name
exports.attandance = mongoose.model("attandance", attendanceschema);
