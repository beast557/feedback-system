import React, { useEffect, useState } from "react";

import Spinner from "../UIElements/spinner/Spinner";
import "./table.css";

import { connect } from "react-redux";

import FacultyList from "./FacultyList";

import { get_students } from "../../actions/student";

import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import StudentList from "./StudentList";
import ShowTableHeader from "./ShowTableHeader";
const ShowStudentComponent = ({
  faculties,
  get_students,
  loading,
  students,
}) => {
  const [formData, setFormData] = useState({
    facultyId: 0,
  });
  let { facultyId } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFinish = (e) => {
    e.preventDefault();

    get_students(facultyId);
  };
  return (
    <>
      <form onSubmit={onFinish}>
        <Label for="YourFaculty" text="Your faculty" />

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
        <br />
        <div>
          <Button type="submit" className="btn-primary" text="Search" />
        </div>
      </form>
      <div>
        <div>
          <h3>Students</h3>
          <table id="customers">
            {students.length < 1 ? null : <ShowTableHeader />}
            {students.length < 1
              ? "No student to display"
              : students.map((student) => (
                  <StudentList
                    key={student.id}
                    id={student.id}
                    name={student.full_name}
                    faculty={student.faculty.name}
                    email={student.email}
                  />
                ))}
          </table>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.student.students_loading,
  students: state.student.students,
});

export default connect(mapStateToProps, { get_students })(ShowStudentComponent);
