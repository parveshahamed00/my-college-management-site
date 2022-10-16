const studentschema = require("../models/student-detail");

exports.addStudent = (req, res) => {
    const student = new studentschema.student_data({
      name: req.body.name,
      admissionNo: req.body.admissionNo,
      rollNo: req.body.rollNo,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      age: req.body.age,
      gender: req.body.gender,
      department: req.body.department,
      address: req.body.address,
      fees: req.body.fees,
    });
    student.save(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("Scuessfully Saved to database");
      }
    });
  // console.log(req.body);
  
};
