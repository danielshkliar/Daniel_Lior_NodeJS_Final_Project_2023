// Daniel Shkliar - 208494906
//Lior Silman - 315318261

const express = require("express");
const router = express.Router();
const { getAbout } = require("../controllers/about.controller");
const { postCost } = require("../controllers/cost.controller");
const { getReport } = require("../controllers/report.controller");

router.get("/about", getAbout);
router.get("/report", getReport);
router.post("/addCost", postCost);

module.exports = router;
