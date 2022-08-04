const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const auth = require("../../middleware/auth");

const {
  create_answer,
  save_question_answer_student,
  delete_answer
} = require("../../controllers/answer");

router.post(
  "/:questionId",
  [
    check("answer", "Your option cant be this short").isLength({ min: 1 }),
    check(
      "answer",
      "Your answer can't contain more than 140 characters"
    ).isLength({ max: 140 }),
  ],
  
  create_answer
);
router.post("/save_answer", auth, save_question_answer_student);
router.delete("/:answerId",delete_answer);

module.exports = router;
