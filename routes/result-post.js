const express = require("express");
const router = express.Router();
const result = require("../controllers/result-post");

router.post("/result", result.result);
module.exports = router;
