const Model = require("./model.js");

class Hierachical extends Model {
  constructor() {
    super();
    this.clusters = [];
  }

  train(initClusters, condition, modifyClusters, data, sortData) {
    if (!data) {
      const NullError = require("../errors/null.js");
      throw new NullError("Did not pass in the data as a parameter");
    }
    const getDimensions = require("../helpers/getDimensions.js");
    const setAverage = require("../utils/hierachical/setAverage.js");

    this.dimensions = getDimensions(data);
    this.clusters = initClusters(data, this.dimensions);
    this.history = [
      {
        generation: 0,
        clusters: this.clusters.slice(),
      },
    ];
    let ind = 1;

    while (condition(this.clusters.length)) {
      setAverage(this.clusters, this.dimensions);
      sortData ? sortData(this.clusters, data, this.dimensions) : null;

      modifyClusters(this.clusters, this.dimensions, data);
      this.history.push({
        generation: ind,
        clusters: this.clusters.slice(),
      });
      ind++;
    }
    let temp = this.history.slice();
    delete this.history;
    return temp;
  }
}

module.exports = Hierachical;
