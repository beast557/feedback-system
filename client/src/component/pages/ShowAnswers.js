import React ,{useEffect} from "react";
import Sidenav from "../UIElements/sidenav/Sidenavteacher";
import { get_question_answer_student } from "../../actions/answer";
import { connect } from "react-redux";
import Spinner from "../UIElements/spinner/Spinner";

const ShowAnswers = ({get_question_answer_student,loading,question}) => {
    useEffect(() => {
        get_question_answer_student()
      }, [get_question_answer_student]);
  return (
    <>
      <Sidenav />
      <div className="main">
      {loading?<Spinner/>:null}
      {question.length<1?"NO data to show":"I am showing data"}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
    loading: state.question.question_answer_student_loading,
    question: state.question.question_answer_student

    
  });
  
  export default connect(mapStateToProps, {
    get_question_answer_student
  })(ShowAnswers);
