const express = require("express");
const path = require("path");

const router = express.Router();

// Route for the index page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../html/index.html"));
});

// Route for the sign-up page
router.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "../../html/sign-up.html"));
});

// Route for the sign-in page
router.get("/sign-in", (req, res) => {
  res.sendFile(path.join(__dirname, "../../html/sign-in.html"));
});

module.exports = router;
