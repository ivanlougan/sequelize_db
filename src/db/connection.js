const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI);

connection.authenticate();

console.log ("db connection is established");


module.exports = connection;