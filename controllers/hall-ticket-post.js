const studentschema = require("../models/student-detail");
const lodash = require("lodash");
const hallTicketschema = require("../models/hall-ticket");
exports.hallTicket = (req, res) => {
  // res.send("HooHOO !! va VAAA")
  let rollNo = lodash.toLower(req.body.rollNo);
  studentschema.student_data.findOne({ rollNo: rollNo }, (err, docs) => {
    if (!err) {
      if (docs === null) {
        res.write("<h1>Error !!</h1>");
        res.write("<h3>Student Not found in database</h3>");

        console.log("Student Not fount in database");
      } else {
        // console.log(docs);
        const hallticket = new hallTicketschema.hallTicket({
          imageURL: docs.imageURl,
          name: docs.name,
          rollNo: rollNo,
          date: req.body.date,
          subCode: req.body.subCode,
          subName: req.body.subName,
        });
    hallticket.save(function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("Scuessfully Saved to database");
        res.sendFile(__dirname + "/hall-ticket-success.html");
      }
    });      }
    } else {
      res.sendStatus(500);

      console.log(err);
    }
  });
};
