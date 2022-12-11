require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require("express");
const cors = require('cors')
const path = require("path");
const routes = require("./router");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

routes(app);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

