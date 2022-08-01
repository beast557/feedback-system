const { validationResult } = require("express-validator");
require("dotenv").config({ path: "./config.env" });
const Faculty = require("../models/faculty");

exports.show_faculties = async (req, res, next) => {
  try {
    let faculty = await Faculty.findAll({
      //     attributes:['id','email','createdAt']
    });

    return res.status(200).send(faculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.create_faculty = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let { name } = req.body;
  try {
    const faculty = await Faculty.create({
      name,
    });
    if (faculty) {
    }
    res.status(200).send({
      msg: [{ msg: "Faculty Added." }],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.delete_faculty = async (req, res, next) => {
  // get id to delete
  const { id } = req.params;

  try {
    let faculty = await Faculty.destroy({
      where: {
        id: id,
      },
    });
    if (faculty) {
      res.status(202).send({ msg: [{ msg: "Faculty deleted successfully" }] });
    } else {
      res.status(400).send({ errors: [{ msg: "An error occured" }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.update_faculty = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    let faculty = await Faculty.findOne({
      where: {
        id: id,
      },
    });
    if (faculty) {
      await Faculty.update(
        { name: name },
        {
          where: {
            id: id,
          },
        }
      );
      return res.send({ msg: [{ msg: "Faculty name updated" }] });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: "Error while updating faculty name" }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
