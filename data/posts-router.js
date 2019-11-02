const express = require("express");
const db = require("../data/db.js");

const router = express();

// GET
router.get("/", (req, res) => {
  db.find()
    .then(posts => {
      res.status(200).json({
        message: "Success",
        posts
      });
    })
    .catch(err => {
      res.status(500).json({
        message: `The post information could not be retrieved, ERROR: ${err}`
      });
    });
});

// GET /:id

// POST

router.post("/", (req, res) => {
  db.find()
    .then(posts => {
      if (!posts.title || !posts.contents) {
        res.status(400).json({
          message: `Please provide title and contents for the post`
        });
      } else {
        res.status(200).json({
          message: "Success",
          posts
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `There was an error while saving the post to the database. ERROR: ${err}`
      });
    });
});

// PUT /:id

// DELETE /:id

module.exports = router;
