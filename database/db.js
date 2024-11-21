const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("zoo_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

require("dotenv").config();
