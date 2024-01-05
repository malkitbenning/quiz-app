import React from "react";

const QuizOption = ({ option, index, optionArray, checkAns }) => {
  return (
    <li
      ref={optionArray[index]}
      onClick={(e) => {
        checkAns(e, index);
      }}
    >
      <div className="frac">
        <span>{option.split("/")[0]}</span>
        <span className="symbol">/</span>
        <span className="bottom">{option.split("/")[1]}</span>
      </div>
    </li>
  );
};

export default QuizOption;
