import React, { useEffect } from "react";
import RegisterComponent from "../auth/student/register/Register";
import { Link } from "react-router-dom";
import Spinner from "../UIElements/spinner/Spinner";

import { connect } from "react-redux";

import { get_faculties } from "../../actions/faculty";

const Register = ({ get_faculties, loading, faculties }) => {
  useEffect(() => {
    get_faculties();
  }, [get_faculties]);
  return (
    <main>
      <section className="login-form">
        <h1 className="title">Student Feedback</h1>
        {loading ? <Spinner /> : <RegisterComponent faculties={faculties} />}
        <div>
          <p>Already have an account?</p>
          <p>
            Login <Link to="/login">here</Link>
          </p>
        </div>
      </section>
    </main>
  );
};
const mapStateToProps = (state) => ({
  loading: state.faculty.faculties_loading,
  faculties: state.faculty.faculties,
});

export default connect(mapStateToProps, { get_faculties })(Register);
