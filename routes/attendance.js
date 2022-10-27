const express = require("express");
const router = express.Router();
const isAuth = require("../index");

const attendance = require("../controllers/attendance");
router.get("/attendance", isAuth.isAuth, attendance.attendance);
module.exports = router;
