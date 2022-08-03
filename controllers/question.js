const Question = require("../models/Question");
const { validationResult } = require("express-validator");
const Answer = require("../models/Answer");
const Faculty = require("../models/faculty");
const Student = require("../models/Student");

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
        {
          model: Faculty,
        },
      ],
    });
    res.json(questionsWithAnswer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.show_question_with_answers = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { id } = req.params;
  try {
    const questionWithAnswer = await Question.findOne({
      where: {
        id: id,
      },
      attributes: ["id", "question"],
      include: [
        {
          model: Answer,
        },
        {
          model: Faculty,
        },
      ],
    });
    res.json(questionWithAnswer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.show_questions_with_answers_for_a_student = async (req, res, next) => {
  // const { id } = req.user;
  // console.log(id);
  try {
    console.log("workking");
    // const findStudentFaculty = await Student.findOne({
    //   where: { id: id },
    //   include: [{ model: Faculty }],
    // });
    // console.log(findStudentFaculty);
    // const questionsWithAnswer = await Question.findAll({
    //   order: [["createdAt", "DESC"]],
    //   attributes: ["id", "question"],
    //   include: [
    //     {
    //       model: Answer,
    //       attributes: ["id", "answer"],
    //     },
    //     {
    //       model: Faculty,
    //     },
    //   ],
    // });
    // res.json(findStudentFaculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
