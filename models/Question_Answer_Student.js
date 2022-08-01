const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Question_answer_student = sequelize.define("question_answer_student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
module.exports = Question_answer_student;
