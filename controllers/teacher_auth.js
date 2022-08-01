const { validationResult } = require("express-validator");
require("dotenv").config({ path: "./config.env" });
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

//code for login
exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let { email, password } = req.body;
  email = email.toLowerCase();
  try {
    let teacher = await Teacher.findOne({
      where: {
        email,
      },
    });
    if (!teacher) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email or password doesnt match" }] });
    }
    const comparePassword = await bcrypt.compareSync(
      password,
      teacher.password
    );
    if (!comparePassword) {
      res
        .status(400)
        .send({ errors: [{ msg: "Email or password doesnt match" }] });
    }
    const payload = {
      user: {
        id: teacher.id,
      },
    };
    jwt.sign(
      payload,
      "" + process.env.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//code for sign up
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let { email, password, confirm_password, full_name } = req.body;

  email = email.toLowerCase();

  if (password !== confirm_password) {
    return res.status(400).json({
      errors: [{ msg: "Confirmed password didnt match or is empty" }],
    });
  }
  try {
    let teacher = await Teacher.findOne({
      where: {
        email: email,
      },
    });
    if (teacher) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email already exists" }] });
    }

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    password = hash;

    teacher = await Teacher.create({
      email,
      password,
      full_name,
    });
    let payload = {
      user: {
        id: teacher.id,
      },
    };

    jwt.sign(
      payload,
      "" + process.env.jwtSecret,
      {
        expiresIn: 36000,
      },
      async (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.loadTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.user.id, {
      attributes: ["id", "full_name"],
    });
    res.json(teacher);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
