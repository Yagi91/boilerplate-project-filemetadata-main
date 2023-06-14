const express = require("express");
const fileAnalyserCtrl = require("../controllers/fileAnalyser.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Create multer object destination folder is used to store the file temporarily in the server before it is processed by the controller function fileanalyse. It is deleted after the function is executed.

const router = express.Router(); // Create router object

router
  .route("/fileanalyse")
  .post(upload.single("upfile"), fileAnalyserCtrl.fileanalyse); // Create route for POST request

module.exports = router; // Export router object
