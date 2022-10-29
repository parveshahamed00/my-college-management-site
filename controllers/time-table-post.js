const express = require("express");
const timetableschema = require("../models/time-table");
const lodash = require("lodash"); // to convert input values
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmkoxe2gk",
  api_key: "274678599356585",
  api_secret: "EL_fj8uawlC4yyVjJ4a0f-v6vzk",
});

exports.timeTable = (req, res) => {
  const file = req.files.image;
  timetableschema.timeTable.find((err, docs) => {
    if (!err) {
      //   console.log(docs,docs[0]);
      if (docs.length === 0) {
        console.log("empty time-table !!");
      } else {
        cloudinary.uploader.destroy(
          docs[0].imageName,
          function (error, result) {
            if (!error) {
              let id = docs[0]._id;
            //   console.log(id);
              timetableschema.timeTable.findByIdAndDelete(id, (err, res) => {
                if (!err) {
                  console.log("deleted previous time table");
                }
              });
            }
          }
        );
      }
    }
  });
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    const timeTable = new timetableschema.timeTable({
      examName: req.body.exam_name,
      imageURl: result.url,
      imageName: result.public_id,
    });
    timeTable.save(function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("Scuessfully Saved to database");
        res.sendFile(__dirname + "/time-table-success.html");
      }
    });
    // console.log(result);
  });
};
