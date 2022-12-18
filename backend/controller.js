//pull data from request -> validate -> send to service -> return response
//from service to view
const { service } = require("./service");

const controller = {
  putWeather: async (req, res) => {
    try {
      let body = req.body;

      //validate...

      if (body) {
        await service.putWeather(body);
        res.status(201).json();
      } else res.status(404).json();

    } catch (err) {
      console.log("controller putWeather", err.message);
      res.status(500).json();
    }
  },

  getWeather: async (req, res) => {
    try {
      const origin = req.headers;
      console.log(origin);
      let { lat, lon } = req.params;
      //validate...?
      let weather = await service.getWeather({ lat, lon });
      res.status(200).json({
        success: true,
        data: weather
      });
    } catch (err) {
      console.log("controller getWeather...", err.message);
      res.status(500).json();
    }
  },
};

module.exports = {
  controller,
};