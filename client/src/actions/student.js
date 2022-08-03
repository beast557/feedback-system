import axios from "axios";
import { setAlert } from "./alert";

import { FETCH_STUDENTS } from "./types";

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
