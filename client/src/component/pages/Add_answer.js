import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import { add_answer } from "../../actions/question";
import { get_questions } from "../../actions/faculty";
// import FacultyList from "../auth/student/register/FacultyList";
import Spinner from "../UIElements/spinner/Spinner";
import { Link } from "react-router-dom";
const add_answer = ({ add_answer, get_questions, loading, questions }) => {
  useEffect(() => {
    get_questions();
  }, [get_questions]);
  const [formData, setFormData] = useState({
    answer: "",
    questionId: 0,
  });
  const { answer, questionId } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = (e) => {
    e.preventDefault();
    add_answer(answer, questionId);
  };
  return (
    <>
      <Sidenav />
      <div className="main">
        <form onSubmit={onFinish}>
          <Alert />
          {loading ? (
            <Spinner />
          ) : (
            <select id="facultyId" name="facultyId" onChange={onChange}>
              <option value="0" disabled selected>
                Select your faculty
              </option>
              {faculties.length < 1
                ? null
                : faculties.map((faculty) => (
                    <FacultyList
                      key={faculty.id}
                      id={faculty.id}
                      name={faculty.name}
                      value={faculty.id}
                    />
                  ))}
            </select>
          )}
          <Label for="Answer" text="Answer" />
          <br />
          <input
            type="text"
            name="answer"
            placeholder="Answer"
            value={answer}
            onChange={onChange}
          />
          <br />
         
          <div>
            <Button type="submit" className="btn-primary" text="Add Answer" />
            <div className="section">
              
            </div>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.question.questions_loading,
  questions: state.question.questions,
});

export default connect(mapStateToProps, { add_answer, get_questions })(
  add_answer
);
