const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const { login, signup, loadUser } = require("./../../controllers/auth");
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
    check("full_name", "You name must be valid.").isLength({ min: 3 }),
  ],
  signup
);

router.get("/auth", auth, loadUser);

module.exports = router;
