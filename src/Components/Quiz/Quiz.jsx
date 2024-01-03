import React, { useState, useRef } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";
import { addFractions } from "./utils/addFractions";
import { makeFraction } from "./utils/makeFraction";
import { generateOptions } from "./utils/generateOptions";

const Quiz = () => {
  let leftFraction = makeFraction();
  let rightFraction = makeFraction();
  const answerFraction = addFractions(leftFraction, rightFraction);
  const mixedAnswers = generateOptions(answerFraction);

  console.log("answer fraction ", answerFraction);
  console.log("mixed answers ", mixedAnswers);
  const buildDataRecord = (leftFraction, rightFraction, mixedAnswers, answerFraction) => {
    const aRecord = {};
    aRecord.questionLeftNumerator = leftFraction.fractionNumerator;
    aRecord.questionLeftDenominator = leftFraction.fractionDenominator;
    aRecord.questionRightNumerator = rightFraction.fractionNumerator;
    aRecord.questionRightDenominator = rightFraction.fractionDenominator;
    aRecord.option = mixedAnswers;
    aRecord.ansFraction =
      answerFraction.fractionNumerator.toString() + "/" + answerFraction.fractionDenominator.toString();
    return aRecord;
  };
  console.log("record ", buildDataRecord(leftFraction, rightFraction, mixedAnswers, answerFraction));
  
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1, Option2, Option3, Option4];

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
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
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
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Fractions Quiz</h1>
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
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
