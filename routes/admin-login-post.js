const express = require("express");
const router = express.Router();
const login_post = require("../controllers/admin-login-detail");
router.post("/", login_post.admin);
module.exports=router
