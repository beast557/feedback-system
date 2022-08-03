import React from "react";
import { Link } from "react-router-dom";
const QuestionList = (props) => {
  return (
    <tr>
      <td>{props.question}</td>
      <td>{props.faculty}</td>
      <td>{props.total_answer}</td>
      <td>
        <Link to={`/admin-pannel/add_answer/${props.id}`}>Add Answer</Link>
      </td>
    </tr>
  );
};

export default QuestionList;
