import React from "react";
import { connect } from "react-redux";
import { delete_student, get_students } from "../../actions/student";

const StudentList = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.delete_student(props.id);
    console.log("working", props.id);
    props.get_students(props.facultyId);
    // window.location.reload(false);
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.faculty}</td>
      <td>{props.email}</td>
      <td>
        <span onClick={onClick}>Delete Student</span>
      </td>
    </tr>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  delete_student,
  get_students,
})(StudentList);
