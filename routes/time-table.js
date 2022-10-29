const express = require("express");
const isAuth = require("../index");

const router = express.Router();
const timeTable = require("../controllers/time-table");
router.get("/time-table", isAuth.isAuth, timeTable.timeTable);
module.exports = router;
