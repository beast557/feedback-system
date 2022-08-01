const Question = require("../models/Question");
const { validationResult } = require("express-validator");
const Answer = require("../models/Answer");
// const User = require("../models/User");
// const Comment = require('../models/Comment')

exports.create_question = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { question, facultyId } = req.body;
  const { id } = req.user;
  try {
    questionResult = await Question.create({
      question,
      facultyId,
    });
    res.json(questionResult);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.show_questions_with_answers = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const questionsWithAnswer = await Question.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "question"],
      include: [
        {
          model: Answer,
          attributes: ["id", "answer"],
        },
      ],
    });
    res.json(questionsWithAnswer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
