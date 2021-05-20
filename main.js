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

let clusters = data.map((i) => {
  return {
    children: [{ x: i.x, y: i.y }],
  };
});
function dist(average1, average2) {
  return Math.sqrt(
    (average1.x - average2.x) ** 2 + (average1.y - average2.y) ** 2
  );
}

let history = [
  {
    generation: 0,
    clusters: clusters,
  },
];
let ind = 0;
while (clusters.length > 1) {
  for (let i = 0; i < clusters.length; i++) {
    let temp = clusters[i];
    let meanX = meanValue(temp.children.map((i) => i.x));
    let meanY = meanValue(temp.children.map((i) => i.y));
    temp["average"] = {
      x: meanX,
      y: meanY,
    };
  }

  let min = 100000;
  let minI = 0;
  let minJ = 0;
  for (let i = 0; i < clusters.length; i++) {
    for (let j = i + 1; j < clusters.length; j++) {
      let d = dist(clusters[i].average, clusters[j].average);
      if (d < min) {
        min = d;
        minI = i;
        minJ = j;
      }
    }
  }
  clusters[minI].children.push(...clusters[minJ].children);
  clusters.splice(minJ, 1);
  history.push({
    generation: ind + 1,
    clusters: clusters.slice(),
  });
  ind++;
}
history.forEach((i) => {
  console.log(i.clusters.length);
});
