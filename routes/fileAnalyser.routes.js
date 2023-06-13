const express = require("express");
const fileAnalyserCtrl = require("../controllers/fileAnalyser.controller");

const router = express.Router(); // Create router object

router.route("/fileanalyse").post(fileAnalyserCtrl.fileanalyse); // Create route for POST request

module.exports = router; // Export router object
