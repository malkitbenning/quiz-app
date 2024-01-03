export const generateOptions = (answerFraction) => {
  let mixedAnswers = [];
  const range = 8;

  for (let i = 0; i < 4; i++) {
    let wrongNumerator = answerFraction.fractionNumerator;
    let wrongDenominator = answerFraction.fractionDenominator;

    while (
      mixedAnswers.some(
        (answer) => answer.fractionNumerator === wrongNumerator && answer.fractionDenominator === wrongDenominator
      )
    ) {
      wrongNumerator = answerFraction.fractionNumerator;
      wrongDenominator = answerFraction.fractionDenominator;
      const operation = Math.random() < 0.5 ? "-" : "+";
      const variation = Math.floor(Math.random() * range) + 1;

      if (operation === "-") {
        if (Math.random() < 0.5 && wrongNumerator >= variation) {
          wrongNumerator -= variation;
        } else if (wrongDenominator >= variation) {
          wrongDenominator -= variation;
        }
      } else {
        if (Math.random() < 0.5) {
          wrongNumerator += variation;
        } else {
          wrongDenominator += variation;
        }
      }
    }
    mixedAnswers.push({
      fractionNumerator: wrongNumerator,
      fractionDenominator: wrongDenominator,
    });
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  mixedAnswers = shuffleArray(mixedAnswers);
  return mixedAnswers;
};
