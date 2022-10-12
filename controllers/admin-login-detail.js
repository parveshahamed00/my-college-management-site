// to simply inserting admin's email and password
const admin_details=require('../models/admin-login-datails')
exports.admin = (req, res) => {
  const admin = new admin_details.admin_detail({
    email: req.body.email,
    password: req.body.password,
  });
  admin.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Scuessfully saved to database");
    }
  });
  res.redirect("/");
};