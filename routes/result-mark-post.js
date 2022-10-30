const express = require("express");
const router = express.Router();
const mark = require("../controllers/result-mark-post");
router.post("/result-marks", mark.resultMarks);
module.exports = router;
