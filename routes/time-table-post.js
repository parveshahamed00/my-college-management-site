const express = require("express");
const router = express.Router();
const timeTable = require("../controllers/time-table-post");
router.post("/time-table", timeTable.timeTable);
module.exports = router;
