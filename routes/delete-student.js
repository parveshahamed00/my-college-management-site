const express = require("express");
const router = express.Router();
const isAuth = require("../index");

const deleteStudent = require("../controllers/delete-student");
router.get("/delete-student", isAuth.isAuth, deleteStudent.deleteStudent);
module.exports = router;
