/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr = str.split('');
  let min = +arr[0];
  let ind = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (min > +arr[i]) {
      min = arr[i];
      ind = i;
    }
  }
  arr.splice(ind, 1);
  return +arr.join('');
}

module.exports = deleteDigit;
