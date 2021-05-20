const distance = require("../../math/distance/euclidean.js");

function removeCluster(clusters, dimensions) {
  let min = 100000;
  let minI = 0;
  let minJ = 0;
  for (let i = 0; i < clusters.length; i++) {
    for (let j = i + 1; j < clusters.length; j++) {
      let d = distance(clusters[i].average, clusters[j].average, dimensions);
      if (d < min) {
        min = d;
        minI = i;
        minJ = j;
      }
    }
  }
  clusters[minI].children.push(...clusters[minJ].children);
  clusters.splice(minJ, 1);
}

module.exports = removeCluster;
