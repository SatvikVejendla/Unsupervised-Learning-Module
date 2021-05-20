function initClusters(data, dimensions) {
  let clusters = data.map((i) => {
    let j = {};
    for (let z = 0; z < dimensions.length; z++) {
      let name = dimensions[z];
      j[name] = i[name];
    }
    return {
      children: [j],
    };
  });

  return clusters;
}

module.exports = initClusters;
