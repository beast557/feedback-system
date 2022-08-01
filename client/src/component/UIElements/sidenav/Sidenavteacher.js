import React from "react";
import { connect } from "react-redux";
import "./sidenav.css";
import { NavLink, Link } from "react-router-dom";

import { logout } from "../../../actions/teacherAuth";
const Sidenav = ({ auth, logout }) => {
  return (
    <>
      <aside className="aside ">
        <nav>
          <div className="nav-header">
            <h1>Report</h1>
            {/* <img src="close.svg" alt="close"  class="close-button" /> --> */}
          </div>
          <ul>
            <li>
              <NavLink to="/admin-pannel">Admin Pannel </NavLink>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                logout{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Sidenav);
