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
  console.log("testing");
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
  console.log("testing");
  const { id } = req.user;
  try {
    const studentFaculty = await Student.findOne({
      where: {
        id: id,
      },
    });
    console.log(studentFaculty.facultyId);
    const questionsWithAnswer = await Question.findAll({
      where: {
        facultyId: studentFaculty.facultyId,
      },
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

exports.delete_question = async (req, res, next) => {
  const { questionId } = req.params;
  try {
    const question = await Question.destroy({
      where: {
        id: questionId,
      },
    });
    if (question) {
      return res
        .status(202)
        .send({ msg: [{ msg: "Question removed successfully" }] });
    }
    return res.status(404).send({ errors: [{ msg: "Question not found" }] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.update_question = async (req, res, next) => {
  const { questionId } = req.params;
  const { question } = req.body;
  try {
    const updated_question = await Question.update(
      { question: question },
      {
        where: { id: questionId },
      }
      
    );

    console.log(updated_question);
    if (updated_question) {
      return res
        .status(202)
        .send({ msg: [{ msg: "Question updated successfully" }] });
    }
    return res.status(404).send({ errors: [{ msg: "Question not found" }] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
