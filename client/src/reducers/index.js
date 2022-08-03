import { combineReducers } from "redux";

import auth from "./auth";
import alert from "./alert";
import faculty from "./faculty";
import student from "./student";
import question from './question'

export default combineReducers({
  auth,
  alert,
  faculty,
  student,
  question
});
