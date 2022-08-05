import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import DisplayQuestionAnswer from "./DisplayQuestionAnswer";
import Sidenav from "../UIElements/sidenav/Sidenav";
import { get_questions_for_student } from "../../actions/question";
import Spinner from "../UIElements/spinner/Spinner";
import Button from "../resueable/button/Button";
const ShowQuestion = ({ get_questions_for_student, loading, questions }) => {
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const [formData, setFormData] = useState({});
  const onFinish = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    get_questions_for_student();
  }, [get_questions_for_student]);
  return (
    <>
      <Sidenav />
      <div className="main">Please answer these following questions</div>
      <br />
      <div>
        <form onSubmit={onFinish}>
          {loading ? <Spinner /> : null}
          {questions.length < 1
            ? "No questions to display right now"
            : questions.map((question) => (
                <DisplayQuestionAnswer
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  answers={question.answers}
                  onChange={onChange}
                />
              ))}
          <div className="center-me-table answer-table">
            <Button type="submit" class="btn-primary" text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.question.questions_for_student_loading,
  questions: state.question.questions_for_student,
});

export default connect(mapStateToProps, { get_questions_for_student })(
  ShowQuestion
);
