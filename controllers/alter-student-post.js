const studentschema = require("../models/student-detail");
 const lodash = require("lodash"); 
exports.alterStudent = (req, res) => {
  const datas = {};
  if (req.body.name) {
    datas.name = req.body.name;
  }
  if (req.body.rollNo) {
    
    datas.rollNo = lodash.toLower(req.body.rollNo);
  }
  if (req.body.email) {
    datas.email = req.body.email;
  }
  if (req.body.phoneNo) {
    datas.phoneNo = req.body.phoneNo;
  }
  if (req.body.age) {
    datas.age = req.body.age;
  }
  if (req.body.gender) {
    datas.gender = req.body.gender;
  }
  if (req.body.department) {
    datas.department = req.body.department;
  }
  if (req.body.address) {
    datas.address = req.body.address;
  }
  if (req.body.fees) {
    datas.fees = req.body.fees;
  }
  // console.log(datas);
  const admissionNo = req.body.alter_admissionNo;
  studentschema.student_data.findOneAndUpdate(
    { admissionNo: admissionNo },
    datas,
    (err, docs) => {
      if (!err) {
        // console.log("Student Successfully Altered");
        // console.log(docs);
        if (docs === null) {
          res.write("<h1>Error !!</h1>");
          res.write("<h3>Student Not found in database</h3>");

          console.log("Student Not fount in database");
        } else {
          console.log("student successfully altered in database");
          res.sendFile(__dirname + "/alter-student-success.html");
        }
      } else {
        console.log(err);
      }
    }
  );
};
