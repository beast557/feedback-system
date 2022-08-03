const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const auth = require("../../middleware/auth");

const {
  create_question,
  show_questions_with_answers,
  show_question_with_answers
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
// router.get("/",auth,get_posts);

// router.get("/:postId",auth,get_post_pk);

// router.get("/:userId/user",auth,get_post_uid);

// router.delete("/:postId",auth,delete_post);

// router.get("/:postId/permision",auth,check_permission);

module.exports = router;
