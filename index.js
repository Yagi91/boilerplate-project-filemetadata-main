var express = require("express");
var cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Import routes
const fineAnalyser = require("./routes/fineAnalyser.routes");

// Routes
app.use("/api", fineAnalyser);

// 404 Not Found Middleware
//This middleware will be executed only if none of the above routes are matched
app.use((req, res, next) => {
  return next({ status: 404, message: "not found" }); //next() is used to pass control to the next middleware function
});

// Error Handling Middleware
//This middleware will be executed only if any of the above routes throw an error
app.use((err, req, res, next) => {
  let errCode, errMessage;
  console.log("In here");
  console.error(err);
  if (err.errors) {
    console.log("first brick");
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || "Internal Server Error";
    console.log("second brick", errCode, errMessage);
  }
  res.status(errCode).json({ error: errMessage });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
