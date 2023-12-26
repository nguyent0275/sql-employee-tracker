require("dotenv").config();
const mysql = require('mysql2/promise')

// this file will read .env file and look for these variables
// DB_HOST=
// DB_USER=
// DB_PASSWORD=
// DB_DATABASE=
const startConnection = async () => {
    // returns a db variable that we can use
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
};
// startConnection is async so we must wait for it to connect
module.exports = startConnection;
