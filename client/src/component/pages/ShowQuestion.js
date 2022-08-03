import React from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Sidenav from "../UIElements/sidenav/Sidenav";

const ShowQuestion = ({}) => {
  return (
    <>
      <Sidenav />
      <div className="main">
        
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ShowQuestion);
