const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
  show_user,
  show_users,
  delete_user,
  update_user_email,
  update_user_password,
} = require("../../controllers/student");
const auth = require("../../middleware/auth");

//show all users
router.get("/", show_users);
//show user
router.get("/:id", show_user);
//edit user details

router.put(
  "/",
  [check("email").isEmail().withMessage("Invalid Email")],
  auth,
  update_user_email
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
  update_user_password
);
//delete user
router.delete("/:id", delete_user);

module.exports = router;
