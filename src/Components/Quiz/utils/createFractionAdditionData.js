import { addFractions } from "./addFractions";
import { makeFraction } from "./makeFraction";
import { generateOptions } from "./generateOptions";
import { buildDataRecord } from "./buildDataRecord";

export const createFractionAdditionData = () => {
  const fractionAdditionData = {};

  const newQuestions = [];
  for (let i = 0; i < 10; i++) {
    const leftFraction = makeFraction();
    const rightFraction = makeFraction();
    const answerFraction = addFractions(leftFraction, rightFraction);
    const mixedAnswers = generateOptions(answerFraction);
    const dataRecord = buildDataRecord(leftFraction, rightFraction, mixedAnswers, answerFraction);
    newQuestions.push(dataRecord);
  }

  return newQuestions;
};
