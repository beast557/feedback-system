import React, { useEffect } from "react";

import Spinner from "../UIElements/spinner/Spinner";

import { connect } from "react-redux";

import { get_faculties } from "../../actions/faculty";
import ShowStudentComponent from "../show_student/ShowStudentComponent";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";

const Register = ({ get_faculties, loading, faculties }) => {
  useEffect(() => {
    get_faculties();
  }, [get_faculties]);
  return (
    <>
      <Sidenav />
      <main>
        <section className="login-form">
          <h1 className="title">Show Students</h1>
          {loading ? (
            <Spinner />
          ) : (
            <ShowStudentComponent faculties={faculties} />
          )}
        </section>
      </main>
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.faculty.faculties_loading,
  faculties: state.faculty.faculties,
});

export default connect(mapStateToProps, { get_faculties })(Register);
