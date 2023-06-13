const express = require("express");
const fileAnalyserCtrl = require("../controllers/fileAnalyser.controller");

const router = express.Router();

router.route("/fileanalyse").post(fileAnalyserCtrl.fileanalyse);

module.exports = router;
