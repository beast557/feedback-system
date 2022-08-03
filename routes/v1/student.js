const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
  show_student,
  show_students,
  delete_student,
  update_student_email,
  update_student_password,
} = require("../../controllers/student");
const auth = require("../../middleware/auth");

//show all users
router.get("/fac/:facultyId", show_students);
//show user
router.get("/:id", show_student);
//edit user details

router.put(
  "/",
  [check("email").isEmail().withMessage("Invalid Email")],
  auth,
  update_student_email
);

//update password
router.put(
  "/password",
  [
    check("new_password", "Password must at least 5 characters")
      .not()
      .isIn(["123", "password", "god"])
      .withMessage("Do not use a common word as password")
      .isLength({ min: 5 })
      .matches(/\d/),
    check(
      "old_password",
      "Old Password must at least be 5 characters"
    ).isLength({ min: 5 }),
  ],
  auth,
  update_student_password
);
//delete user
router.delete("/:id", delete_student);

module.exports = router;
