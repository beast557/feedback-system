

const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Student_question_answer = sequelize.define('student_question_answer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});
module.exports = Student_question_answer;