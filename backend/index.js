const debug = require("debug")("backend:server");
const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  console.error(`Error: ${error.code}`);
  process.exit(1);
});
