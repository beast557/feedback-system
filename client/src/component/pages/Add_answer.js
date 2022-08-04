import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import { get_question } from "../../actions/question";
import { add_answer, delete_answer } from "../../actions/answer";
import { useParams } from "react-router-dom";

import Spinner from "../UIElements/spinner/Spinner";

const Add_answer = ({
  loading,
  add_answer,
  question,
  get_question,
  match,
  answers,
  delete_answer,
}) => {
  const { id } = useParams();
  useEffect(() => {
    get_question(id);
    // console.log(id);
  }, [get_question]);
  const [formData, setFormData] = useState({
    answer: "",
  });
  const { answer } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = (e) => {
    e.preventDefault();
    add_answer(id, answer);
  };
  return (
    <>
      <Sidenav />
      <div className="main">
        <div>
          <h2>
            {loading ? (
              <Spinner />
            ) : (
              <ShowQuestion question={question.question} />
            )}
          </h2>
          <br />
        </div>
      </div>
      <div className="main">
        <form onSubmit={onFinish}>
          <Alert />
          <Label for="Answer" text="Answer for this question" />
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
            <div className="section"></div>
          </div>
        </form>
        <br />
      </div>
      <div className="main">
        <h3>Recently added Answer for this question</h3>
      </div>
      <div className="center-me-table answer-table">
        <table id="customers">
          {answers.length < 1 ? null : <ShowTableHeader />}
          {answers.length < 1
            ? "No answers for this question"
            : answers.map((answer) => (
                <ShowAnswer
                  answer={answer.answer}
                  id={answer.id}
                  delete_answer={delete_answer}
                />
              ))}
        </table>
      </div>
      <br />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.question.question_loading,
  question: state.question.question.data,
  answers: state.question.question.data.answers,
});

export default connect(mapStateToProps, {
  get_question,
  add_answer,
  delete_answer,
})(Add_answer);

const ShowQuestion = (props) => {
  return <>{props.question}</>;
};

const ShowAnswer = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.delete_answer(props.id);
    window.location.reload(false);
  };
  return (
    <tr>
      <td>{props.answer}</td>
      <td>
        <span onClick={onClick}>Delete Answer</span>
      </td>
    </tr>
  );
};
const ShowTableHeader = () => {
  return (
    <>
      <tr>
        <th>Answer</th>
        <th>Operation</th>
      </tr>
    </>
  );
};
