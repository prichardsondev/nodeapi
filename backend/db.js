//note I have a GET from a remote api - OpenWeatherMap - and a POST to a local file - database.json
//in this same file. Create a db folder and seperate files. Or better yet seperate APIs since
//they are not part of the same system. Would make more sense if this file was CRUDding
//to same db...

require('dotenv').config();
const openApiRoute = process.env.OPENWEATHERMAP_APIROUTE;
const key = process.env.OPENWEATHERMAP_APIKEY;

const fs = require("fs");

const db = {

    get: async ({lat,lon}) => {
        try {
            const path = `${openApiRoute}lat=${lat}&lon=${lon}&appid=${key}`;
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
        //update to call getJsonFile()
        fs.readFile('./database.json', "utf8", (err, data) => {
            let cdata = JSON.parse(data);
            cdata.push(body);
            fs.writeFileSync("./database.json", JSON.stringify(cdata,null,4));
        });
    }
};

module.exports = {
    db,
};