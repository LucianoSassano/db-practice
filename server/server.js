const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  next();
});

const port = 3000;
const routes = require("../routes/routes");
const morgan = require("morgan");
var bodyParser = require("body-parser");
require("dotenv").config();

console.log(process.env.DB_NAME);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"));
routes(app);
console.log(process.env.DB_USER);
app.get("*", (req, res) =>
  res.status(400).send({
    message: "No se encuentra el recurso"
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
