const express = require("express");
const router = express.Router();
const isAuth = require("../index");

const result = require("../controllers/result");
router.get("/result", isAuth.isAuth, result.result);
module.exports = router;
