import axios from "axios";
import { setAlert } from "./alert";

import { ADD_QUESTION } from "./types";

export const add_question = (question, facultyId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ question, facultyId });
  console.log(body);
  try {
    const res = await axios.post("/api/v1/question/", body, config);

    dispatch({
      type: ADD_QUESTION,
      payload: res.data,
    });
    dispatch(setAlert("Question ADDED", "success"));
  } catch (err) {
    // const errors = err.response.data.errors;
    dispatch(setAlert("Failed", "danger"));
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
