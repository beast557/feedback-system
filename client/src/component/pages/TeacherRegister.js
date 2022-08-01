import React from "react";
import RegisterComponent from "../auth/teacher/register/Register";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main>
      <section className="login-form">
        <h1 className="title">Teacher Register</h1>
        <RegisterComponent />
        <div>
          <p>Already have an account?</p>
          <p>
            Login <Link to="/teacher/login">here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
