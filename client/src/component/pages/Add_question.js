import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import { add_question } from "../../actions/question";
import { get_faculties } from "../../actions/faculty";
import FacultyList from "../auth/student/register/FacultyList";
import Spinner from "../UIElements/spinner/Spinner";
import { Link } from "react-router-dom";
const Admin_Pannel = ({ add_question, get_faculties, loading, faculties }) => {
  useEffect(() => {
    get_faculties();
  }, [get_faculties]);
  const [formData, setFormData] = useState({
    question: "",
    facultyId: 0,
  });
  const { question, facultyId } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = (e) => {
    e.preventDefault();
    add_question(question, facultyId);
  };
  return (
    <>
      <Sidenav />
      <div className="main">
        <form onSubmit={onFinish}>
          <Alert />
          <Label for="Question" text="Question" />
          <br />
          <input
            type="text"
            name="question"
            placeholder="Question"
            value={question}
            onChange={onChange}
          />
          <br />
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
          <div>
            <Button type="submit" className="btn-primary" text="Add Question" />
            <div className="section">
              <p>
                <Link to="add_answer">Click here</Link> to add answers to your
                questions
              </p>
            </div>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.faculty.faculties_loading,
  faculties: state.faculty.faculties,
});

export default connect(mapStateToProps, { add_question, get_faculties })(
  Admin_Pannel
);
