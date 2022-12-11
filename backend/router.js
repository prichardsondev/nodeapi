"use strict";

const { controller } = require("./controller");

module.exports = (app) => {
  app.route("/weather/:lat/:lon").get(controller.getWeather);
  app.route("/weather").post(controller.putWeather);
};