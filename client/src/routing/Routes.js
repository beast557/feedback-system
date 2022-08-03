import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../routing/PrivateRoute";
//teacher
import TeacherLogin from "../component/pages/TeacherLogin";
import TeacherRegister from "../component/pages/TeacherRegister";
import Admin_Pannel from "../component/pages/Admin-Pannel";
import Add_faculty from "../component/pages/Add_faculty";
import Add_question from "../component/pages/Add_question";
import Add_answer from "../component/pages/Add_answer";

//student
import Login from "../component/pages/Login";
import Register from "../component/pages/Register";
import Show_students from "../component/pages/Show_students";

// import Dashboard from '../component/pages/Dashboard'
// import  Transaction  from '../component/pages/Transaction';
// import  Companies  from '../component/pages/Companies';
// import  Company  from '../component/pages/Company';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Register} exact />
        <Route path="/teacher/login" component={TeacherLogin} exact />
        <Route path="/teacher/signup" component={TeacherRegister} exact />
        <PrivateRoute path="/admin-pannel" component={Admin_Pannel} exact />
        <PrivateRoute
          path="/admin-pannel/add_faculty"
          component={Add_faculty}
          exact
        />
        <PrivateRoute
          path="/admin-pannel/add_question"
          component={Add_question}
          exact
        />
        <PrivateRoute
          path="/admin-pannel/add_answer/:id"
          component={Add_answer}
          exact
        />
        <Route
          path="/admin-pannel/show_student"
          component={Show_students}
          exact
        />
        {/* <Route  path='/signup' component={Register} exact/>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/transaction' component={Transaction} />
        <PrivateRoute exact path='/companies' component={Companies} />
        <PrivateRoute exact path='/company/:companyId' component={Company} /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;
