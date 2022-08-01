import { FETCH_FACULTIES } from "../actions/types";

const initialState = {
  faculties: [],
  faculties_loading: true,
};

export default function company(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_FACULTIES:
      return {
        ...state,
        faculties: payload,
        faculties_loading: false,
      };
    default:
      return state;
  }
}
