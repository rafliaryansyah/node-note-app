'use strict';
require('dotenv').config();

const mysql = require('mysql');

const {
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

const dbConnection = mysql.createConnection({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD
});

dbConnection.connect((error) => {

    if (error) {
        throw error;
    }

    console.log("Database Connect!");

});

module.exports = dbConnection;