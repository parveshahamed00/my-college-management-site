const express = require("express");

const studentschema = require("../models/student-detail");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmkoxe2gk",
  api_key: "274678599356585",
  api_secret: "EL_fj8uawlC4yyVjJ4a0f-v6vzk",
});
exports.deteteStudent = (req, res) => {
  //   studentschema.student_data.deleteOne({ damissionNo: req.body.admissionNo },(err,docs)=>{
  //     if(!err)
  //     {
  //         res.sendStatus(404);

  //         console.log("student scuessfully Deleted from database");
  //     }
  //     else{
  //         console.log(err);
  //     }
  //   });
  studentschema.student_data.findOneAndRemove(
    { admissionNo: req.body.admissionNo },
    function (err, docs) {
      if (err) {
        res.sendStatus(500);

        console.log(err);
      } else {
        if (docs === null) {
          res.write("<h1>Error !!</h1>");
          res.write("<h3>Student Not found in database</h3>");

          console.log("Student Not fount in database");
        } else {
          cloudinary.uploader.destroy(docs.imageName, function (error, result) {
            // console.log(result, error);
            if (!error) {
              console.log("Student scuessfully deleted from database");
            }
          });
          res.sendFile(__dirname + "/delete-student-success.html");
        }
      }
    }
  );
};
