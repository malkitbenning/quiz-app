export const buildDataRecord = (leftFraction, rightFraction, mixedAnswers, answerFraction) => {
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
