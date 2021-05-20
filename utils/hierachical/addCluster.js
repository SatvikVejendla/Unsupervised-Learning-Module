const distance = require("../../math/distance/euclidean.js");

function addCluster(clusters, dimensions, data) {
  let max = 0;
  let maxPoint = 0;
  for (let i = 0; i < clusters.length; i++) {
    let temp = clusters[i].children;
    for (let j = 0; j < temp.length; j++) {
      let d = distance(clusters[i].average, temp[j], dimensions);
      if (d > max) {
        max = d;
        maxPoint = temp[j];
      }
    }
  }
  maxPoint["average"] = maxPoint;

  clusters.forEach((i) => (i.children = []));

  let new_x = maxPoint.x;
  let new_y = maxPoint.y;
  clusters.push({ average: { x: new_x, y: new_y }, children: [] });

  for (let i = 0; i < data.length; i++) {
    let distances = [];
    for (let j = 0; j < clusters.length; j++) {
      distances[j] = distance(clusters[j].average, data[i], dimensions);
    }
    let ind = distances.indexOf(Math.max(...distances));

    clusters[ind].children.push(data[i]);
  }
}

module.exports = addCluster;
