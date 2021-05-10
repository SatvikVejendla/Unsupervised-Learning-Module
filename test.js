const UnsupervisedLearning = require("./index.js");

let a = new UnsupervisedLearning(
  2,
  (init_method = "first"),
  (type = "k-means")
);

let data = [];
for (let i = 0; i < 100; i++) {
  let x = Math.random();
  let y;
  if (x > 0.5) {
    y = x * x;
  } else {
    y = 1 - x * x;
  }
  data.push({
    x: x,
    y: y,
  });
}

a.initClusters(data);

a.train(data, 100000);

console.log(a.clusters);
