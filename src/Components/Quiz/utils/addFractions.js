export const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const addFractions = (fraction1, fraction2) => {
  const numerator =
    fraction1.fractionNumerator * fraction2.fractionDenominator +
    fraction2.fractionNumerator * fraction1.fractionDenominator;
  const denominator = fraction1.fractionDenominator * fraction2.fractionDenominator;

  const divisor = gcd(numerator, denominator);

  const simplifiedNumerator = numerator / divisor;
  const simplifiedDenominator = denominator / divisor;

  return { fractionNumerator: simplifiedNumerator, fractionDenominator: simplifiedDenominator };
};
