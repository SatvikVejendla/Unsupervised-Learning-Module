const UL = require("../index.js");

let a = new UL.Agglomerative();

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

let history = a.train(data);

console.log(a);
console.log(history);
