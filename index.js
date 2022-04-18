const express = require("express");
const App = express();
const WebRoute = require("./route/WebRoute");

App.get("/", (req, res) => {
  res.send("Hello World");
});

App.use("/webroute", WebRoute);

App.listen(5000, () => {
  console.log("server start on port 5000");
});
