const meanValue = require("../math/mean.js");

function learn(clusters, dimensions) {
  for (let i = 0; i < clusters.length; i++) {
    let clust = clusters[i];

    for (let j = 0; j < dimensions.length; j++) {
      let name = dimensions[j];
      let mean = meanValue(clust.children.map((i) => i[name]));
      clust[name] = mean;
    }

    clust.children = [];
  }
}

module.exports = learn;
