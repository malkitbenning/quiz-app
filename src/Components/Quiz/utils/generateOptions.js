export const generateOptions = (answerFraction) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let mixedAnswers = [];
  const range = 8;

  mixedAnswers.push(`${answerFraction.fractionNumerator}/${answerFraction.fractionDenominator}`);

  while (mixedAnswers.length < 4) {
    let wrongNumerator = answerFraction.fractionNumerator;
    let wrongDenominator = answerFraction.fractionDenominator;

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

    const newWrongAnswer = `${wrongNumerator}/${wrongDenominator}`;

    const isNotDuplicate = !mixedAnswers.includes(newWrongAnswer);

    if (isNotDuplicate) {
      mixedAnswers.push(newWrongAnswer);
    }
  }

  mixedAnswers = shuffleArray(mixedAnswers);
  return mixedAnswers;
};
