const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if(date == null) {
    throw new Error('Unable to determine the time of year!');
  }
  else if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let millisecoonds = date.getMilliseconds();
  let weekDay = date.getDay();

  if(month === 11 && day <= 31|| month === 0 && day <= 31 || month === 1  && day <= 29) {
    return 'winter';
  }
  else if(month === 2 && day <= 31|| month === 3 && day <= 30|| month === 4 && day <= 31) {
    return 'spring';
  }
  else if(month === 5 && day <= 30|| month === 6 && day <= 31|| month === 7 && day <= 31) {
    return 'summer';
  } 
  else if(month === 8 && day <= 30|| month === 9 && day <= 31|| month === 10 && day <= 30){
    return 'autumn';
  }else {
    throw new Error('Invalid date!');
  }
}



module.exports = {
  getSeason
};
