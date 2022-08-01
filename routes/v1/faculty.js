const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const auth = require("../../middleware/auth");
const {
  show_faculties,
  delete_faculty,
  create_faculty,
  update_faculty,
} = require("../../controllers/faculty");

//create faculty
router.post("/", create_faculty);

//show all faculty

router.get("/", show_faculties);

//edit faculty details
router.put("/:id", update_faculty);
//delete faculty
router.delete("/:id", delete_faculty);

module.exports = router;
