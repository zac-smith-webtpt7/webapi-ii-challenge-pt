const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to posts-router"
  });
});

module.exports = router;
