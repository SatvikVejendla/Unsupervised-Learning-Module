function distance(coord, clust, dimensions) {
  let sum = 0;

  for (let i = 0; i < dimensions.length; i++) {
    let name = dimensions[i];
    sum += (coord[name] - clust[name]) ** 2;
  }
  return Math.sqrt(sum);
}

module.exports = distance;
