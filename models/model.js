class Model {
  constructor() {
    this.clusters = [];
  }
  train() {
    throw new Error("Can't invoke abstract method!");
  }
}

module.exports = Model;
