import { FETCH_STUDENTS } from "../actions/types";

const initialState = {
  students: [],
  students_loading: true,
};

export default function company(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        students: payload,
        students_loading: false,
      };
    default:
      return state;
  }
}
