//map routes to controller
"use strict";

const { controller } = require("./controller");

module.exports = (app) => {
  app.route("/weather/:lat/:lon/:units").get(controller.getWeather);
  app.route("/weather").post(controller.putWeather);
};