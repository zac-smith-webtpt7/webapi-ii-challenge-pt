const expres = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to nodeJS"
  });
});

module.exports = server;
