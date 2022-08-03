const express = require("express");
const app = express();
const sequelize = require("./config/database");
require("dotenv").config();

//routes
const studentAuth = require("./routes/v1/auth");

const facultyRoute = require("./routes/v1/faculty");
const studentRoute = require("./routes/v1/student");

const teacherAuth = require("./routes/v1/teacher_auth");

const question = require("./routes/v1/question");
const answerRoute = require("./routes/v1/answer");

const Teacher = require("./models/Teacher");
const Question = require("./models/Question");
const Answer = require("./models/Answer");
const Question_answer_student = require("./models/Question_Answer_Student");
const Student = require("./models/Student");
const Faculty = require("./models/faculty");
//middlewares for students
app.use(express.json({ extended: false }));
app.use("/api/v1/student/auth", studentAuth);

//teachers
app.use("/api/v1/teacher/auth", teacherAuth);

app.use("/api/v1/faculty", facultyRoute);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/question", question);
app.use("/api/v1/answer", answerRoute);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

Faculty.hasMany(Question, {
  constraints: true,
  onDelete: "CASCADE",
});
Question.belongsTo(Faculty);

Question.hasMany(Answer, {
  constraints: true,
  onDelete: "CASCADE",
});
Answer.belongsTo(Question);

//question answer student to store student's answer
Question.hasMany(Question_answer_student, {
  constraints: true,
  onDelete: "CASCADE",
});
Question_answer_student.belongsTo(Question);

Answer.hasMany(Question_answer_student, {
  constraints: true,
  onDelete: "CASCADE",
});
Question_answer_student.belongsTo(Answer);

Student.hasMany(Question_answer_student, {
  constraints: true,
  onDelete: "CASCADE",
});
Question_answer_student.belongsTo(Student);

Faculty.hasMany(Student, {
  constraints: true,
  onDelete: "CASCADE",
});
Student.belongsTo(Faculty);

const PORT = process.env.PORT || 5000;
sequelize
  .sync({
    // force: true,
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
