import axios from "axios";
import { setAlert } from "./alert";

import { ADD_QUESTION, FETCH_QUESTION, FETCH_QUESTIONS,DELETE_QUESTION ,GET_QUESTION_FOR_STUDENT} from "./types";

export const add_question = (question, facultyId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ question, facultyId });
  
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

export const delete_question = (questionId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  try {
    const res = await axios.delete(`/api/v1/question/${questionId}`, config);
    dispatch({
      type: DELETE_QUESTION,
      payload: res,
    });
    // console.log(res.data);
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

export const get_questions_for_student = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  try {
    const res = await axios.post(`/api/v1/question/student`, config);
    dispatch({
      type: GET_QUESTION_FOR_STUDENT,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};
