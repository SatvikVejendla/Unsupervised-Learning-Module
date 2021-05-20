const meanValue = require("../../math/mean.js");

function setAverage(clusters, dimensions) {
  for (let i = 0; i < clusters.length; i++) {
    let temp = clusters[i];
    temp["average"] = {};

    for (let j = 0; j < dimensions.length; j++) {
      let name = dimensions[j];
      let mean = meanValue(temp.children.map((i) => i[name]));
      temp.average[name] = mean;
    }
  }
}

module.exports = setAverage;
