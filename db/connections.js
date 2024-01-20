require("dotenv").config();
const mysql = require('mysql2/promise')

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
