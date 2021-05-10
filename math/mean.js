let meanValue = (arr) =>
  arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;

module.exports = meanValue;
