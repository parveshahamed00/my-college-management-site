const express=require("express")
const router=express.Router();
const alterStudent=require("../controllers/alter-student-post")
router.post("/alter-student",alterStudent.alterStudent)
module.exports=router;