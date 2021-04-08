/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = n.toString();

  const sums = (string) => {
    let sum = 0;
    if (string.length === 1) {
      return +string;
    }

    for (let i = 0; i < string.length; i++) {
      sum += +string[i];
    }

    return sums(sum.toString());
  };

  return sums(str);
}

module.exports = getSumOfDigits;
