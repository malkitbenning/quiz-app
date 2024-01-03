export const makeFraction = () => {
  const denominatorMin = 2;
  const denominatorMax = 9;
  const numeratorMin = 1;
  const numeratorMax = 9;
  let randomDenominator = Math.floor(Math.random() * (denominatorMax - denominatorMin + 1)) + denominatorMin;
  let randomNumerator = Math.floor(Math.random() * (numeratorMax - numeratorMin + 1)) + numeratorMin;

  while (randomNumerator >= randomDenominator) {
    randomNumerator = Math.floor(Math.random() * (numeratorMax - numeratorMin + 1)) + numeratorMin;
  }
  let builtFraction = { fractionNumerator: randomNumerator, fractionDenominator: randomDenominator };
  return builtFraction;
};
