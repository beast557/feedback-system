
const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Question = sequelize.define('question', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  question: {
    type:Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Question;