const express=require("express")
const router=express.Router()
const student=require("../controllers/add-student-post")

router.post("/add-student", student.addStudent);
module.exports=router