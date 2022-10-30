const lodash = require("lodash");
const hallTicketschema = require("../models/hall-ticket");
const examMarkSchema = require("../models/result-marks");
exports.resultMarks = (req, res) => {
  //   console.log(req.body);
  let rollNo = lodash.toLower(req.body.rollNO);
  //   console.log(rollNo);
  hallTicketschema.hallTicket.findOne({ rollNo: rollNo }, (err, docs) => {
    if (!err) {
      // console.log(docs);
      const resultDetails = new examMarkSchema.examMarks({
        imageURL: docs.imageURL,
        name: docs.name,
        rollNo: rollNo,
        date: docs.date,
        subCode: docs.subCode,
        subName: docs.subName,
        marks: req.body.marks,
      });
      resultDetails.save(function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("Scuessfully Saved to database");
          res.sendFile(__dirname + "/result-success.html");
        }
      });
    }
  });
};
