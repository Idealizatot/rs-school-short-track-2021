/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((element) => {
    const arr = element.split('.').reverse();
    arr.forEach((item, i) => {
      if (arr[i - 1]) {
        arr[i] = `${arr[i - 1]}.${item}`;
      }
      if (!obj[`.${arr[i]}`]) {
        obj[`.${arr[i]}`] = 1;
      } else {
        obj[`.${arr[i]}`]++;
      }
    });
  });
  return obj;
}

module.exports = getDNSStats;
