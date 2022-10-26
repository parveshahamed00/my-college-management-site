const studentschema = require("../models/student-detail");

exports.alterStudent = (req, res) => {
    const datas=[]
    if(req.body.name){
        datas.push({ name: req.body.name });
    }
//   const admissionNo = req.body.alter_admissionNo;
//   studentschema.student_data.findOneAndUpdate(
//     { admissionNo: admissionNo },

//     { name: req.body.name, rollNo: req.body.rollNo },
//     { ignoreUndefined: 1 },

//     (err, docs) => {
//       if (!err) {
//         console.log("Student Successfully Altered");
//         console.log(docs);
//       } else {
//         console.log(err);
//       }
//     }
//   );
  // console.log(admissionNo);
};
