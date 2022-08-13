import axios from "axios";
import { setAlert } from "./alert";
import { get_question } from "./question";

import { ADD_ANSWER, DELETE_ANSWER,FETCH_QUESTION_ANSWER_STUDENT } from "./types";

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

export const delete_answer = (answerId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  try {
    const res = await axios.delete(`/api/v1/answer/${answerId}`, config);
    dispatch({
      type: DELETE_ANSWER,
      payload: res,
    });
    
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

export const get_question_answer_student = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`/api/v1/answer`, config);
    dispatch({
      type: FETCH_QUESTION_ANSWER_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
