/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const newStr1 = s1.split('');
  const newStr2 = s2.split('');

  for (let i = 0; i < newStr1.length; i++) {
    if (newStr2.indexOf(newStr1[i]) !== -1) {
      newStr2.splice(newStr2.indexOf(newStr1[i]), 1);
      sum++;
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
