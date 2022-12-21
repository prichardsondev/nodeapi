//preform logic -> send to db 
const fs = module.require("fs");

const { db } = require("./db");

const service = {
    putWeather: async (body) => {
        try {
            //reshape data
            db.post(body);
        } catch (err) { }
    },
    getWeather: async ({ lat, lon, units }) => {
        let weather = await db.get({ lat, lon, units });
        return weather;
    },
};

module.exports = {
    service,
};