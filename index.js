class UnsupervisedLearning {
  constructor(num_clusters, init_method = "random", type = "k-means") {
    this.cluster_size = num_clusters;
    this.init_method = init_method;
    this.type = type;
  }

  initClusters(data) {
    switch (this.init_method) {
      case "first":
        const firstCluster = require("./initClusters/first.js");
        let d = firstCluster(data, this.cluster_size);
        this.clusters = d.clusters;
        this.dimensions = d.dimensions;
        break;
      case "random":
      default:
        const randomCluster = require("./initClusters/random.js");
        d = randomCluster(data, this.cluster_size);
        this.clusters = d.clusters;
        this.dimensions = d.dimensions;
        break;
    }
  }

  train(data, generations) {
    if (generations && data) {
      const categorize = require("./utils/categorize.js");
      const learn = require("./utils/learn.js");

      for (let i = 0; i < generations; i++) {
        categorize(data, this.clusters, this.dimensions);
        learn(this.clusters, this.dimensions);
      }
      categorize(data, this.clusters, this.dimensions);
    } else {
      let NullError = require("./errors/null.js");
      if (!generations) {
        throw new NullError("Did not specify the number of generations");
      }
      if (!data) {
        throw new NullError("Did not pass in the data as a parameter");
      }
    }
  }
}

module.exports = UnsupervisedLearning;
