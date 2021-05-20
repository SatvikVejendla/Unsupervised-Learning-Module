const distance = require("../../math/distance/euclidean.js");

function sortData(clusters, data, dimensions) {
  for (let i = 0; i < data.length; i++) {
    let min = 1000;
    let minI = 0;
    for (let j = 0; j < clusters.length; j++) {
      let d = distance(clusters[j].average, data[i], dimensions);
      if (d < min) {
        min = d;
        minI = j;
      }
    }
    clusters[minI].children.push(data[i]);
  }
}

module.exports = sortData;
