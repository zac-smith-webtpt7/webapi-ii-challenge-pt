const server = require("./server.js");

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`\nServer is listening on port ${PORT}\n`);
});
