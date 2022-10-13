const express = require("express");
const isAuth = require("../index");

const router = express.Router();
const home=require('../controllers/home-page')
router.get('/home',isAuth.isAuth,home.home)
module.exports=router;