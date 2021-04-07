/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let resultStr = '';
  let j = 0;
  while (i < str.length) {
    if (str[i] !== str[i + 1]) {
      const prefix = j ? j + 1 : '';
      resultStr = resultStr + prefix + str[i];
      j = 0;
    } else {
      j++;
    }
    i++;
  }
  return resultStr;
}

module.exports = encodeLine;
