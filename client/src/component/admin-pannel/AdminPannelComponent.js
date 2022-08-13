import React from "react";
import "./AdminPannelComponent.css";
import { Link } from "react-router-dom";
const AdminPannelComponent = ({ dashboard, loading, get_dashboard }) => {
  return (
    <div className="adminpannel">
      <div className="title">
        <h2>Admin Pannel</h2>
      </div>
      <div className="flex-item">
        <div className="boxes"><Link to="/admin-pannel/add_faculty">Add Faculty</Link></div>
        <div className="boxes"><Link to="/admin-pannel/add_question">Add Questions</Link></div>
        <div className="boxes"><Link to="/admin-pannel/show_student">Show Students</Link></div>
        <div className="boxes"><Link to="/admin-pannel/show_answer">Show Students Answer</Link></div>
      </div>
    </div>
  );
};

export default AdminPannelComponent;
