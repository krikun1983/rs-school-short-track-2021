/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    for (let k = 0; k < newArr.length; k++) {
      if (newArr[i] < newArr[k]) {
        if (newArr[i] === -1) {
          break;
        }
        const temp = newArr[i];
        newArr[i] = newArr[k];
        newArr[k] = temp;
      }
    }
  }
  return newArr;
}

module.exports = sortByHeight;
