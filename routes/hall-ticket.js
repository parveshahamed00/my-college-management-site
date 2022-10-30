const express = require("express");
const router = express.Router();
const isAuth = require("../index");

const hallTicket = require("../controllers/hall-ticket");
router.get("/hall-ticket", isAuth.isAuth, hallTicket.hallTicket);
module.exports = router;
