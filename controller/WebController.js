const { getWebModel } = require("../model/WebModel");
const getController = (req, res) => {
  res.send(getWebModel());
};

module.exports = { getController };
