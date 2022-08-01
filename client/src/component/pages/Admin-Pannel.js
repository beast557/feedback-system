import React, { useEffect } from "react";

import { connect } from "react-redux";

import AdminPannelComponent from "../admin-pannel/AdminPannelComponent";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";

const Admin_Pannel = () => {
  return (
    <>
      <Sidenav />
      <div className="main">
        <AdminPannelComponent />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Admin_Pannel);
