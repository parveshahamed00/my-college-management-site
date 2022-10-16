const express=require("express")
const router=express.Router()
const student=require("../controllers/add-student-post")
const student_image = require("../index");

router.post("/add-student", student_image.upload.single('image'), student.addStudent);
module.exports=router