module.exports = function towelSort (matrix) {
  return  matrix.reduce((abc, deep, i) => {
          deep.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => abc.push(e));
          return abc;}, [])
}
