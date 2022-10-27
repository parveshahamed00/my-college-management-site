const studentschema = require("../models/student-detail");
const lodash = require("lodash");
exports.setAttendance = (req, res) => {
  let rollNo = lodash.toLower(req.body.rollNo);
  console.log(req.body.attendance, rollNo);
  studentschema.student_data.findOne({ rollNo: rollNo }, (err, docs) => {
    if (!err) {
      // console.log(docs);
      if (docs === null) {
        res.write("<h1>Error !!</h1>");
        res.write("<h3>Student Not found in database</h3>");

        console.log("Student Not fount in database");
      } else {
        console.log(docs);
      }
    } else {
      console.log(err);
    }
  });
};
