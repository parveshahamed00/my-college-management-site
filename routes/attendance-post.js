const express = require("express");
const router = express.Router();
const setAttendance = require("../controllers/attendance-post");
router.post("/attendance", setAttendance.setAttendance);
module.exports = router;
