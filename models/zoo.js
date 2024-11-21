const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("zoo_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Zoo = sequelize.define("Zoo", {
  name: { type: DataTypes.STRING, allowNull: false },
  species: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  habitat: { type: DataTypes.STRING },
});

module.exports = Zoo;
