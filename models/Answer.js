
const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Answer = sequelize.define('answer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  answer: {
    type:Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Answer;