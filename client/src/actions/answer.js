import axios from "axios";
import { setAlert } from "./alert";
import { get_question } from "./question";

import { ADD_ANSWER } from "./types";

export const add_answer = (questionId, answer) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(questionId, answer);
  const body = JSON.stringify({ questionId, answer });

  try {
    const res = await axios.post(`/api/v1/answer/${questionId}`, body, config);

    dispatch({
      type: ADD_ANSWER,
      payload: res.data,
    });
    dispatch(setAlert("Answer ADDED", "success"));
    dispatch(get_question(questionId));
  } catch (err) {
    // const errors = err.response.data.errors;
    dispatch(setAlert("Failed", "danger"));
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
