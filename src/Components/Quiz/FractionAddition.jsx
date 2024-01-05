import React, { useState, useRef } from "react";
import "./Quiz.css";

const FractionAddition = ({ fractionAdditionData }) => {
  const [allQuestions, setAllQuestions] = useState(fractionAdditionData);

  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(allQuestions[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.option[ans] === question.ansFraction) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        let correctOptionPosition = question.option.indexOf(question.ansFraction);
        optionArray[correctOptionPosition].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === allQuestions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(allQuestions[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(allQuestions[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Fractions Addition Quiz</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. Calculate{" "}
            <div className="frac">
              <span> {question.questionLeftNumerator}</span> <span className="symbol">/</span>
              <span className="bottom">{question.questionLeftDenominator} </span>
            </div>
            <span> + </span>
            <div className="frac">
              <span>{question.questionRightNumerator}</span>
              <span className="symbol">/</span>
              <span className="bottom">{question.questionRightDenominator}</span>
            </div>
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 0);
              }}
            >
              <div className="frac">
                <span>{question.option[0].split("/")[0]}</span>
                <span className="symbol">/</span>
                <span className="bottom">{question.option[0].split("/")[1]}</span>
              </div>
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              <div className="frac">
                <span>{question.option[1].split("/")[0]}</span>
                <span className="symbol">/</span>
                <span className="bottom">{question.option[1].split("/")[1]}</span>
              </div>
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              <div className="frac">
                <span>{question.option[2].split("/")[0]}</span>
                <span className="symbol">/</span>
                <span className="bottom">{question.option[2].split("/")[1]}</span>
              </div>
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              <div className="frac">
                <span>{question.option[3].split("/")[0]}</span>
                <span className="symbol">/</span>
                <span className="bottom">{question.option[3].split("/")[1]}</span>
              </div>
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {allQuestions.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {allQuestions.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FractionAddition;
