import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../../../actions/auth";
import { Redirect } from "react-router-dom";

import Button from "../../../resueable/button/Button";
import Label from "../../../resueable/lable/Label";
import Alert from "../../../UIElements/Alert/Alert";

import FacultyList from "./FacultyList";

const Register = ({ register, isAuthenticated, faculties }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    full_name: "",
    agree: false,
    facultyId: 0,
    batch_year: "",
    section: "",
  });

  let {
    confirm_password,
    email,
    password,
    agree,
    full_name,
    facultyId,
    batch_year,
    section,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const agreeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: !agree });
  };
  const onFinish = (e) => {
    e.preventDefault();

    register({
      email,
      full_name,
      password,
      confirm_password,
      agree,
      facultyId,
      batch_year,
      section,
    });
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={onFinish}>
      <Alert />
      <Label for="full_name" text="Full name" />
      <input
        type="text"
        name="full_name"
        placeholder="Full name"
        value={full_name}
        onChange={onChange}
      />
      <Label for="email" text="Email" />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <Label for="password" text="Password" />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChange}
      />
      <Label for="confirm password" text="Confirm Password" />
      <input
        type="password"
        name="confirm_password"
        placeholder="password"
        value={confirm_password}
        onChange={onChange}
      />
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
      <Label for="section" text="section" />
      <input
        type="text"
        name="section"
        placeholder="section"
        value={section}
        onChange={onChange}
      />
      <Label for="batch_year" text="Batch Year" />
      <input
        type="text"
        name="batch_year"
        placeholder="Batch Year"
        value={batch_year}
        onChange={onChange}
      />
      <div>
        <input
          type="checkbox"
          name="agree"
          value={agree}
          onChange={agreeChange}
        />
        <span>I agree to every this website terms and agreements</span>
      </div>
      <div>
        <Button type="submit" className="btn-primary" text="Sign up" />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
