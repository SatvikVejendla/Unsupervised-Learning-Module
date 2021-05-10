const meanValue = require("./math/mean.js");

let data = [];

for (let i = 0; i < 100; i++) {
  let x = parseInt(Math.random() * 2);
  let y;
  if (x > 0.5) {
    y = x * x;
  } else {
    y = 1 - x * x;
  }
  y = x;
  data.push({
    x: x,
    y: y,
  });
}

let NUM_CLUSTERS = 2;

let clusters = new Array(NUM_CLUSTERS);

for (let i = 0; i < clusters.length; i++) {
  let temp = data[Math.floor(Math.random() * data.length)];
  clusters[i] = {
    x: temp.x,
    y: temp.y,
    children: [],
  };
}

function distance(coord, clust) {
  return Math.sqrt((coord.x - clust.x) ** 2 + (coord.y - clust.y) ** 2);
}

for (let z = 0; z < 2000000; z++) {
  if (z % 100000 == 0) {
    console.log(z);
  }
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];

    let min = 1000;
    let minIndex = 0;
    for (let i = 0; i < clusters.length; i++) {
      let clust = clusters[i];
      if (distance(temp, clust) < min) {
        min = distance(temp, clust);
        minIndex = i;
      }
    }
    clusters[minIndex].children.push(temp);
  }

  for (let i = 0; i < clusters.length; i++) {
    let clust = clusters[i];
    let meanX = meanValue(clust.children.map((i) => i.x));
    let meanY = meanValue(clust.children.map((i) => i.y));

    clust.x = meanX;
    clust.y = meanY;

    clust.children = [];
  }
}
console.log(clusters);
