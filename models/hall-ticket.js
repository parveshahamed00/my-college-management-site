const mongoose = require("mongoose");
// scheme -structure
const hallTicketschema = new mongoose.Schema({
  imageURL:String,
  name:String,
  rollNo:String,
  department:String,
  date:Array,
  subCode:Array,
  subName:Array
});
// model -collection-name
exports.hallTicket = mongoose.model("hall-ticket", hallTicketschema);
