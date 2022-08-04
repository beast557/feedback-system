const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const auth = require("../../middleware/auth");

const {
  create_question,
  show_questions_with_answers,
  show_question_with_answers,
  show_questions_with_answers_for_a_student,
  delete_question
} = require("../../controllers/question");

router.post(
  "/",
  [
    check("question", "Your post cant be this short").isLength({ min: 4 }),
    check(
      "question",
      "Your post cant contain more than 140 characters"
    ).isLength({ max: 140 }),
  ],
  auth,
  create_question
);
router.get("/", show_questions_with_answers);
router.get("/:id", show_question_with_answers);
router.delete("/:questionId",delete_question);

router.post("/student", show_questions_with_answers_for_a_student);

module.exports = router;
