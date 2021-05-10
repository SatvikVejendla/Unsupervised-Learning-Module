# Unsupervised-Learning-Module
A simple unsupervised learning package for Node JS. Currently provides only k-means clustering for detecting patterns in data.

This package has no external dependencies.



## Installation and Set up

To install the package:
```
npm install unsupervised-learning
```

Import the package in your project by typing this line of code at the top of your file.

```
const UnsupervisedLearning = require("unsupervised-learning")
```


## Demo

```
let a = new UnsupervisedLearning(
  2,
  (init_method = "first"),
  (type = "k-means")
);

// Generating the data
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

//Training
a.initClusters(data);

a.train(data, 100000);

console.log(a.clusters);
```

## Documentation

```new UnsupervisedLearning(num_clusters, init_method = "random", type = "k-means")```

num_clusters is how many groups you want to sort the data into.

For the init_method, you can pass in "random" or "first".

"Random" selects a random dataset to start off the as the initial centroid value for each cluster.
"First" goes in order and sets the centroid values to the first few values in the dataset.

For the type, you can only pass in "k-means". K-means Clustering is currently the only type supported.


```
a.initClusters(data)
```

Initializes the clusters based on the data passed in.

```
train(data, generations)
```

Trains the clusters based on the data passed in.

Generations is how many times you want the computer to "learn".


### Some notes about the data

When you use this package, your data that you pass in has to be a JSON object. All of the attributes of this JSON object should be your input values.

For example:

```
data.push({
    petalLength: x,
    petalWidth: y,
});
```

This would work because it's attributes are numerical and there are not extra attributes.

However, the following would not work:

```
data.push({
  name: "Message",
  time: "12:03 PM",
  score: 2,
  timeLeft: 4
});
```

Because there are string attributes of the JSON object, this won't work.
