function categorize(data, clusters, dimensions) {
  const distance = require("../math/distance.js");
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];

    let min = 1000;
    let minIndex = 0;
    for (let i = 0; i < clusters.length; i++) {
      let clust = clusters[i];
      let dist = distance(temp, clust, dimensions);
      if (dist < min) {
        min = dist;
        minIndex = i;
      }
    }
    clusters[minIndex].children.push(temp);
  }
}

module.exports = categorize;
