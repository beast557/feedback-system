import axios from "axios";
import { setAlert } from "./alert";

import { DELETE_STUDENT, FETCH_STUDENTS } from "./types";

export const get_students = (facultyId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`/api/v1/student/fac/${facultyId}`, config);
    dispatch({
      type: FETCH_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const delete_student = (studentId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  try {
    const res = await axios.delete(`/api/v1/student/${studentId}`, config);
    dispatch({
      type: DELETE_STUDENT,
      payload: res,
    });
    
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};