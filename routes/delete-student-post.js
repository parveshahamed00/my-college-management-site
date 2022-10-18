const express = require("express")
const router=express.Router()
const deleteStudent=require("../controllers/delete-student-post")
router.post("/delete-student",deleteStudent.deteteStudent)
module.exports=router