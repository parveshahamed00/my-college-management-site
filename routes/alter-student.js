const express=require("express")
const router=express.Router()
const isAuth = require("../index");

const alterStudent=require("../controllers/alter-student")
router.get("/alter-student",isAuth.isAuth,alterStudent.alterStudent)
module.exports=router