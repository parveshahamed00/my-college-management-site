const express = require("express");
const router = express.Router();
const isAuth = require("../index");

const student = require("../controllers/add-student");
router.get("/add-student",isAuth.isAuth, student.addStudent);
module.exports = router;
