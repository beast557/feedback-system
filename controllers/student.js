const { validationResult } = require("express-validator");
require("dotenv").config({ path: "./config.env" });

const Student = require("../models/Student");

const bcrypt = require("bcryptjs");
//code for login
exports.show_student = async (req, res, next) => {
  let { id } = req.params;
  id = id.toLowerCase();
  try {
    let student = await Student.findOne({
      where: {
        id,
      },
      attributes: ["id", "email", "createdAt"],
      // include: [
      //   {
      //     model: User_role,
      //     where: {
      //       role: "student",
      //     },
      //     attributes: ["role"],
      //   },
      //   {
      //     model: User_detail,
      //     attributes: ["first_name", "last_name"],
      //   },
      // ],
    });
    if (!student) {
      return res.status(400).json({ errors: [{ msg: "No user found" }] });
    }
    return res.status(200).send(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.show_students = async (req, res, next) => {
  try {
    let student = await Student.findAll({
      attributes: ["id", "email", "createdAt"],
      // include: [
      //   {
      //     model: User_role,
      //     where: {
      //       role: "student",
      //     },
      //     attributes: ["role"],
      //   },
      //   {
      //     model: User_detail,
      //     attributes: ["first_name", "last_name"],
      //   },
      // ],
    });
    if (!student) {
      return res.status(400).json({ errors: [{ msg: "No student to show " }] });
    }
    return res.status(200).send(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.delete_student = async (req, res, next) => {
  // get id to delete
  const { id } = req.params;

  try {
    let student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (student) {
      res.status(202).send({ msg: [{ msg: "Student deleted successfully" }] });
    } else {
      res.status(400).send({ errors: [{ msg: "An error occured" }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
//update user
exports.update_student_email = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let { email } = req.body;
  const { id } = req.user;
  try {
    email = email.toLowerCase();
    //search user
    const student = await Student.findOne({
      where: {
        id: id,
      },
    });

    //if found update and send success message
    if (student) {
      await Student.update(
        { email: email },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(202).send({
        msg: [
          {
            msg: "Student's Email updated",
          },
        ],
      });
    } else {
      res.status(400).send({ errors: [{ msg: "Invalid student" }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.update_student_password = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { id } = req.user;
    const { new_password, confirm_password, old_password } = req.body;
    //check new password and confirm password
    if (new_password !== confirm_password) {
      res.status(400).send({
        errors: [
          { msg: "Your confirm password and current password didn't match" },
        ],
      });
    } else {
      //if they are same
      //get database password and compare it with old password
      let student = await Student.findOne({
        where: {
          id: id,
        },
      });
      const comparePassword = await bcrypt.compareSync(
        old_password,
        user.password
      );
      //if old password matches
      if (!comparePassword) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Old password doesn't match" }] });
      }

      //update
      if (comparePassword) {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(new_password, salt);

        password = hash;
        await Student.update(
          {
            password: password,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).send({
          msg: [{ msg: "Password Updated" }],
        });
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
