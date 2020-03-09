const mysql = require("mysql");

const connection = mysql.createConnection({
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "tasks",
  host: process.env.DB_HOST || "localhost"
});

connection.on("error", function(err) {
  console.log(err.code);
});

exports.connection = connection;
