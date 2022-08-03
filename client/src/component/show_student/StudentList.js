import React from "react";

const StudentList = (props) => {
  return (
    <tr>
    <td>{props.name}</td>
    <td>{props.faculty}</td>
    <td>{props.email}</td>
  </tr> 
  );
};

export default StudentList;
