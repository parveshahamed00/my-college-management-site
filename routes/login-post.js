const express = require('express')
const router=express.Router()
const login_post=require('../controllers/login-post')
router.post('/',login_post.login_post)
module.exports = router;
//
// const router = express.Router();
// const login_page = require("../controllers/login");
// router.get("/", login_page.login);
// module.exports = router;