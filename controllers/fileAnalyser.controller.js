const express = require("express");
const fileanalyse = async (req, res, next) => {
  console.log(req.file);
  try {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    });
  } catch (err) {
    // console.log(err);
    // res.status(500).json({ error: "Server Error" });
    next(err);
  }
};

module.exports = {
  fileanalyse,
};
