import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import Button from "../resueable/button/Button";
import Label from "../resueable/lable/Label";
import Alert from "../UIElements/Alert/Alert";
import { update_question } from "../../actions/question";
import { useParams } from "react-router-dom";

import Spinner from "../UIElements/spinner/Spinner";

const Update_question = ({ loading, update_question }) => {
  const { id } = useParams();
  //   useEffect(() => {
  //     get_question(id);
  //   }, [get_question]);
  const [formData, setFormData] = useState({
    question: "",
  });
  const { question } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = (e) => {
    e.preventDefault();
    update_question(id, question);
  };
  return (
    <>
      <Sidenav />

      <div className="main">
        <form onSubmit={onFinish}>
          <Alert />
          <Label for="Question" text="Enter Updated question" />
          <br />
          <input
            type="text"
            name="question"
            placeholder="question"
            value={question}
            onChange={onChange}
          />
          <br />

          <div>
            <Button type="submit" className="btn-primary" text="Update" />
            <div className="section"></div>
          </div>
        </form>
        <br />
      </div>

      <br />
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  update_question,
})(Update_question);
