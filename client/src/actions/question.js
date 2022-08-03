import axios from "axios";
import { setAlert } from "./alert";

import { ADD_QUESTION, FETCH_QUESTION, FETCH_QUESTIONS } from "./types";

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
    dispatch(get_questions());
  } catch (err) {
    // const errors = err.response.data.errors;
    dispatch(setAlert("Failed", "danger"));
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

export const get_questions = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`/api/v1/question`, config);
    dispatch({
      type: FETCH_QUESTIONS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const get_question = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // console.log(id);
  try {
    const res = await axios.get(`/api/v1/question/${id}`, config);
    dispatch({
      type: FETCH_QUESTION,
      payload: res,
    });
    console.log(res.data);
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
