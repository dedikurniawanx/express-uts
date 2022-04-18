const { Router } = require("express");
const { getController } = require("../controller/WebController");
const route = Router();

route.get("/", (req, res) => {
  getController(req, res);
});

module.exports = route;
