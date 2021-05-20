const Hierachical = require("../../hierachical.js");

class Divisive extends Hierachical {
  constructor() {
    super();
  }

  train(data, cluster_size = 3) {
    const initClusters = require("../../../initClusters/hierachical/divisive.js");
    const addCluster = require("../../../utils/hierachical/addCluster.js");
    const sortData = require("../../../utils/hierachical/sortData.js");
    return super.train(
      initClusters,
      (len) => len < cluster_size,
      addCluster,
      data,
      sortData
    );
  }
}

module.exports = Divisive;
