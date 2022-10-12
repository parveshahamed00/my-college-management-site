const mongoose = require("mongoose");
// scheme -structure
const loginschema = new mongoose.Schema({
  email: String,
  password: String,
});
// model -collection-name
exports.admin_detail = mongoose.model("login-datail", loginschema);
