const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api/");

server.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to nodeJS"
  });
});

module.exports = server;
