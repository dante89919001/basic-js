const { NotImplementedError } = require('../extensions/index.js');

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
 function getDNSStats(domainsArray) {
  const res = {};
  domainsArray.forEach((domain) => {
    let subDomain = '';
    const revDomain = domain.split('.').reverse();
    revDomain.forEach((element) => {
      subDomain = `${subDomain}.${element}`;
      if (subDomain in res) {
        res[subDomain]++;
      } else {
        res[subDomain] = 1;
      }
    });
  });
  return res;
}

module.exports = {
  getDNSStats
};
