import React from "react";

import { connect } from "react-redux";

import Sidenav from "../UIElements/sidenav/Sidenav";
import DashboardContent from "../dashboard/Dashboard";
import { Link } from "react-router-dom";

const Dashboard = ({}) => {
  return (
    <>
      <Sidenav />
      <div className="adminpannel">
        <div className="title">
          <h2>Admin Pannel</h2>
        </div>
        <div className="flex-item">
          <div className="boxes">
            <Link to="/dashboard/showquestion">Show Questions</Link>
          </div>
          
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Dashboard);
