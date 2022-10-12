const admin_data = require("../models/admin-login-datails");


exports.login_post = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

      admin_data.admin_detail.findOne((err,docs)=>{
        if (!err) {
            if (docs.email===email && docs.password===password) {
                res.sendFile(__dirname+"/index.html")
            } else {
            //    alert("You are not Authorised to access this site ");

                        res.sendFile(__dirname + "/unauthorised.html");


            }
        }
      })

//   res.redirect("/");
};

// -- Testine like admin is authenticated
// const admin=require('../models/admin-login-datails')
// exports.admin_details=(req,res)=>{
//     console.log(req.body,email,req.body,password);
// }
