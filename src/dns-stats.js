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
function getDNSStats(domains) {
  if(domains == null || domains.length === 0) {
    return {};
  }
  domains.sort((a, b) => b.length - a.length);
  let statistic = {};
  for(let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse().join('.');
  }
 
  let oneDomain = domains[0].slice(0, domains[0].indexOf('.'));
  let count = 0;
  domains.forEach(domain => {
    if(domain.includes(oneDomain)) {
      count++;
    }
  })
  statistic[`.${oneDomain}`] = count;

  count = 0;
  let twoDomains = domains[0].slice(0, domains[0].lastIndexOf('.'));
  domains.forEach(domain => {
    if(domain.includes(twoDomains)) {
      count++;
    }
  })
  statistic[`.${twoDomains}`] = count;

  count = 0;
  let allDomains = domains[0];
  domains.forEach(domain => {
    if(domain.includes(allDomains)) {
      count++;
    }
  })
  statistic[`.${domains[0]}`] = count;

  return statistic;

}


module.exports = {
  getDNSStats
};


 