function randomCluster(data, cluster_size) {
  let clusters = new Array(cluster_size);
  for (let i = 0; i < cluster_size; i++) {
    let temp = data[Math.floor(Math.random() * data.length)];
    let clust = {
      children: [],
    };
    let keys = Object.keys(data[0]);
    let dimensions = keys.length;
    for (let j = 0; j < dimensions; j++) {
      let name = keys[j];
      clust[name] = temp[name]; //data[keys]
    }
    clusters[i] = clust;
  }

  let d = [];
  let keys = Object.keys(data[0]);
  for (let j = 0; j < keys.length; j++) {
    let name = keys[j];
    d.push(name);
  }
  return {
    clusters: clusters,
    dimensions: d,
  };
}

module.exports = randomCluster;
