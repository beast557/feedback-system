import { FETCH_QUESTIONS,FETCH_QUESTION ,GET_QUESTION_FOR_STUDENT,FETCH_QUESTION_ANSWER_STUDENT} from "../actions/types";

const initialState = {
  questions: [],
  questions_loading: true,
  question:{},
  question_loading:true,
  questions_for_student:[],
  questions_for_student_loading:true,
  question_answer_student:[],
  question_answer_student_loading:true
};

export default function company(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: payload,
        questions_loading: false,
      };
      case FETCH_QUESTION:
      return {
        ...state,
        question: payload,
        question_loading: false,
      };
      case GET_QUESTION_FOR_STUDENT:
        return {
          ...state,
          questions_for_student:payload,
          questions_for_student_loading:false
        };
        case FETCH_QUESTION_ANSWER_STUDENT:
        return {
          ...state,
          question_answer_student:payload,
          question_answer_student_loading:false
        }
    default:
      return state;
  }
}
