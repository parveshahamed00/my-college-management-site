const express = require("express");
const lodash = require("lodash");

const studentschema = require("../models/student-detail");
const hallTicketschema = require("../models/hall-ticket");

exports.result = (req, res) => {
  let rollNo = lodash.toLower(req.body.rollNo);
  studentschema.student_data.findOne({ rollNo: rollNo }, (err, docs) => {
    if (err) {
      res.sendStatus(500);

      console.log(err);
    } else {
      if (docs === null) {
        res.write("<h1>Error !!</h1>");
        res.write("<h3>Student Not found in database</h3>");

        console.log("Student Not fount in database");
      } else {
        hallTicketschema.hallTicket.findOne(
          { rollNo: docs.rollNo },
          (err, docs) => {
            if (!err) {
              // console.log(docs);
              if (docs === null) {
                res.write("<h1>Warning !!</h1>");
                res.write("<h3>Hall-ticket not set for this student</h3>");
                console.log("Hall-ticket not set for this student");
              } else {
                //   console.log(docs);
                res.render("result-mark", {
                  student: docs.name,
                  date: docs.date,
                  subCode: docs.subCode,
                  subName:docs.subName
                });
              }
            } else {
              res.write("<h1>Error !!</h1>");
              res.write("<h3>Student Not found in database</h3>");

              console.log("Student Not fount in database");
            }
          }
        );
        // res.render("result-mark",{student:docs.name})
        // console.log(docs);
        //  res.sendFile(__dirname + "/delete-student-success.html");
      }
    }
  });
};
