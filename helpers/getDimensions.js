function getDimensions(data) {
  let d = [];
  let keys = Object.keys(data[0]);
  for (let j = 0; j < keys.length; j++) {
    let name = keys[j];
    d.push(name);
  }
  return d;
}

module.exports = getDimensions;
