import React, { useEffect, useState } from "react";

const DisplayQuestionAnswer = (props) => {
  
  return (
    <>
      <br />
      <div className="center-me-table answer-table">
        <h4>{props.question}</h4>
      </div>
      <br />
      <div className="center-me-table answer-table">
        {props.answers.length < 1
          ? "No answer for this question"
          : props.answers.map((answer) => (
              <DisplayAnswer
                id={answer.id}
                answer={answer.answer}
                questionId={props.id}
                onChange={props.onChange}
              />
            ))}
      </div>
    </>
  );
};

const DisplayAnswer = (props) => {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name={props.questionId}
        value={props.id}
        onChange={props.onChange}
      />
        <label htmlFor={props.answer}>{props.answer}</label>
      <br /> 
    </>
  );
};
export default DisplayQuestionAnswer;
