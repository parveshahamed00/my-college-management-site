const express = require("express");
const router = express.Router();
const hallTicket = require("../controllers/hall-ticket-post");
router.post("/hall-ticket", hallTicket.hallTicket);
module.exports = router;
