// setup database connection
const mysql = require('mysql');

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Qwerty123!",
	database: "yoga_mysql"
});

module.exports = db;