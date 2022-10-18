const express =require("express")
const studentschema = require("../models/student-detail");
 const lodash = require("lodash"); // to convert input values
 const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmkoxe2gk",
  api_key: "274678599356585",
  api_secret: "EL_fj8uawlC4yyVjJ4a0f-v6vzk",
});

exports.addStudent = (req, res) => {

  const file = req.files.image;
  cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    const student = new studentschema.student_data({
      name: req.body.name,
      admissionNo: req.body.admissionNo,
      rollNo: lodash.toLower(req.body.rollNo),
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      age: req.body.age,
      gender: req.body.gender,
      department: req.body.department,
      address: req.body.address,
      fees: req.body.fees,
      imageURl: result.url,
      imageName: result.public_id
    });
    student.save(function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("Scuessfully Saved to database");
        res.sendFile(__dirname+"/add-student-success.html")
      }
    });
    // console.log(result);
  })
};
