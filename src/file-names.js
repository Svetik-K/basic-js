const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [];
  names.forEach((name, index) => {
    if(newNames.indexOf(name) === -1) {
      newNames.push(name);
    } else {
      let countInInitialArr = 0;
      for(let i = 0; i < index; i++) {
        if(name === names[i]) {
          countInInitialArr++;
        }
      }
      let countInResultArr = 0;
      for(let i = 0; i < newNames.length; i++) {
        if(name === newNames[i]) {
          countInResultArr++;
        }
      }
      newNames.push(`${name}(${Math.max(countInInitialArr, countInResultArr)})`);
    }
  })
  return newNames;
}

module.exports = {
  renameFiles
};
