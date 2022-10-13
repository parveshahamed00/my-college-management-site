const express=require('express')
const router=express.Router()
const logout=require('../controllers/logout')
router.post("/logout",logout.logout)
module.exports=router