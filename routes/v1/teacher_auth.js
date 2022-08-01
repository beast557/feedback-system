const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
  login,
  signup,
  loadTeacher,
} = require("./../../controllers/teacher_auth");
const auth = require("../../middleware/auth");

router.post(
  "/login",
  [
    check("email", "email cant be empty").isEmail().isLength({ min: 1 }),
    check("password", "password cant be empty").isLength({ min: 1 }),
  ],
  login
);

router.post(
  "/signup",
  [
    check("email").isEmail().withMessage("Invalid Email"),
    check("password", "Password must at least 5 characters")
      .not()
      .isIn(["123", "password", "god"])
      .withMessage("Do not use a common word as password")
      .isLength({ min: 5 })
      .matches(/\d/),
    check("full_name", "You full name must be valid.").isLength({ min: 5 }),
  ],
  signup
);

router.get("/auth", auth, loadTeacher);

module.exports = router;
