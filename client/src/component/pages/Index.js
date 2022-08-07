import React from "react";
import LoginComponent from "../auth/student/login/Login";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="adminpannel">
      <div className="flex-item">
        <div className="boxes">
          <Link to="/teacher/login">Teacher</Link>
        </div>
        <div className="boxes">
          <Link to="/login">Student</Link>
        </div>
      </div>
    </div>
  );
}
