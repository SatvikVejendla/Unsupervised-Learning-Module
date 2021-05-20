const Hierachical = require("../../hierachical.js");

class Agglomerative extends Hierachical {
  constructor() {
    super();
  }

  train(data, cluster_size = 1) {
    const initClusters = require("../../../initClusters/hierachical/agglomerative.js");
    const removeCluster = require("../../../utils/hierachical/removeCluster.js");

    return super.train(
      initClusters,
      (len) => len > cluster_size,
      removeCluster,
      data
    );
  }
}

module.exports = Agglomerative;
