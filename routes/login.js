const express = require('express')
const router=express.Router()
const login_page=require('../controllers/login')
router.get('/',login_page.login)
module.exports =router