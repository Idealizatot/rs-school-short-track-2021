/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let status = true;
  const numberArr = n.split('-');
  if (numberArr.length !== 6) {
    status = false;
  }
  if (numberArr.some((element) => Number.parseInt(element, 16).toString(16) !== element.toLowerCase() && element !== '00')) {
    status = false;
  }
  return status;
}

module.exports = isMAC48Address;
