const express=require('express')
const router = express.Router();
const welcome = require("../controllers/welcome");
router.get("/welcome", welcome.welcome);
module.exports = router;