const express = require("express");
const db = require("../data/db.js");

const router = express();

// Route /api/posts

// GET / ~ MVP
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

// GET /:id ~ MVP
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(post => {
      if (!id) {
        res.status(404).json({
          message: `Post id ${id} does not exist`
        });
      } else {
        res.status(200).json({
          message: "Success",
          post
        });
      }
    })
    .catch(err => {
      res.status(500).json({});
    });
});

// GET /:id/comments ~ MVP

router.get("/:id/comments", (req, res) => {
  const id = req.params.id;

  db.findPostComments(id)
    .then(comments => {
      if (comments.length == 0) {
        res.status(200).json({
          message: `The post with id ${id} does not exist`
        });
      } else {
        res.status(200).json({
          message: "Success",
          comments
        });
      }
      // if (!id) {
      //   res.status(404).json({
      //     message: `The post with id ${id} does not exist`
      //   });
      // } else {
      //   res.status(200).json({
      //     comments
      //   });
      // }
    })
    .catch(err => {
      res.status(500).json({
        message: `The comments information could not be retrieved. ERROR ${err}`
      });
    });
});

// POST /

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

// /:id/comments

// PUT /:id

// DELETE /:id

module.exports = router;
