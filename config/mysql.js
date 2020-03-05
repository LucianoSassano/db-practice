const mysql = require('mysql');

const connection = mysql.createConnection({
    host      : 'localhost',
    port      : '3306',
    user      : 'root',
    password  : 'password',
    database  : 'tasks'
    // port      : process.env.DB_PORT     || '3306',
    // user      : process.env.DB_USER     || 'root',
    // password  : process.env.DB_PASSWORD || '6028',
    // database  : process.env.DB_NAME     || 'task'
    // host      : process.env.DB_HOST     || 'localhost',
});

connection.on('error', function(err) {
    console.log(err.code);
});

exports.connection = connection;