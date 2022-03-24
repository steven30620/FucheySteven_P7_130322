const mysqlModel = require("mysql2");
require("dotenv").config();

const connection = mysqlModel.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect(function (err) {
	if (err) {
		console.log("!!! Cannot connect !!! Error:");
		throw err;
	} else {
		console.log("Connection established.");
	}
});

module.exports = connection;
