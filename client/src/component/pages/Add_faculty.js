import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import { add_faculty } from "../../actions/faculty";
const Admin_Pannel = ({ add_faculty }) => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = (e) => {
    e.preventDefault();
    // console.log(name)
    add_faculty(name);
  };
  return (
    <>
      <Sidenav />
      <div className="main">
        <form onSubmit={onFinish}>
          <Alert />
          <Label for="Faculty_name" text="faculty Name" />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Faculty"
            value={name}
            onChange={onChange}
          />
          <div>
            <Button type="submit" className="btn-primary" text="Add faculty" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { add_faculty })(Admin_Pannel);
