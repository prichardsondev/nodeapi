//note I have a GET to a remote api - OpenWeatherMap - and a POST to a local file - database.json
//in this same file. Create a db folder and seperate files. Or better yet seperate APIs since
//they are not part of the same system. Would make more sense if this file was CRUDding
//to same db... POST is just here as an example

require('dotenv').config();
const openWeatherMapRoute = process.env.OPENWEATHERMAP_APIROUTE;
const key = process.env.OPENWEATHERMAP_APIKEY;

const fs = require("fs");

const db = {

    get: async ({ lat, lon, units }) => {
        try {
            const path = `${openWeatherMapRoute}lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;
            const res = await fetch(path);
            const json = await res.json();
            return json;

        }
        catch (err) {
            console.log(`db: ${err}`);
            return { "error": err };
        }
    },
    post: async (body) => {
        console.log(body);
        fs.readFile('./database.json', "utf8", (err, data) => {
            let cdata = JSON.parse(data);
            cdata.push(body);
            fs.writeFileSync("./database.json", JSON.stringify(cdata, null, 4));
        });
    }
};

module.exports = {
    db,
};