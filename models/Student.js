const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Student = sequelize.define("student", {
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
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  batch_year:{
    type: Sequelize.STRING,  
    allowNull: false
  }
});
module.exports = Student;
