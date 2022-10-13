const admin_data = require("../models/admin-login-datails");


exports.login_post = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

      admin_data.admin_detail.findOne((err,docs)=>{
        if (!err) {
            if (docs.email===email && docs.password===password) {

                req.session.isAuth = true; // for saving cookie  
                res.redirect('/home')
            } else {

                        res.sendFile(__dirname + "/unauthorised.html");


            }
        }
      })

};


