const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Teacher = sequelize.define("teacher", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
module.exports = Teacher;
