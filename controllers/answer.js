const { validationResult } = require("express-validator");
const Teacher = require("../models/Teacher");
const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Question_answer_student = require("../models/Question_Answer_Student");

exports.create_answer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { answer } = req.body;
  const { id } = req.user;
  const { questionId } = req.params;

  try {
    answerResult = await Answer.create({
      answer,
      questionId,
    });
    res.json(answerResult);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.save_question_answer_student = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const studentId = req.user.id;
  const { questionId, answerId } = req.body;
  try {

    studentQuestionAnswer = await Question_answer_student.create({
      studentId,
      questionId,
      answerId
    });
    res.json(studentQuestionAnswer);
  } catch {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
