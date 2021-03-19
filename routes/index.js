const express = require("express");
const router = express.Router();

// Set up application
const app = express();

//Route definition for home page
router.get("/", (req, res) => {
    res.render("pages/index")})
  
  // Export router to app.js 
  module.exports = router