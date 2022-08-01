import axios from "axios";
import { setAlert } from "./alert";

import { FETCH_FACULTIES, ADD_FACULTY } from "./types";

export const get_faculties = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get("/api/v1/faculty/", config);
    dispatch({
      type: FETCH_FACULTIES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const add_faculty = (name) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name });
  console.log(name);
  try {
    const res = await axios.post("/api/v1/faculty/", body, config);

    dispatch({
      type: ADD_FACULTY,
      payload: res.data,
    });
    dispatch(setAlert("FACULTY ADDED", "success"));
  } catch (err) {
    // const errors = err.response.data.errors;
    dispatch(setAlert("Failed", "danger"));
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
