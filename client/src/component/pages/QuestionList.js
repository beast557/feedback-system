import React from "react";
import { connect } from "react-redux";
import { delete_question } from "../../actions/question";
import { Link } from "react-router-dom";
const QuestionList = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    // console.log("Working" + props.id);
    props.delete_question(props.id);
    window.location.reload(false);
  };
  return (
    <tr>
      <td>{props.question}</td>
      <td>{props.faculty}</td>
      <td>{props.total_answer}</td>
      <td>
        <Link to={`/admin-pannel/add_answer/${props.id}`}>Add Answer</Link>
      </td>
      <td>
        <span onClick={onClick}>Delete Question</span>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  delete_question,
})(QuestionList);
