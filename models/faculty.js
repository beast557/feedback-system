const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Faculty= sequelize.define('faculty', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type:Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Faculty;