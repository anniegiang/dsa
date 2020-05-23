function numRegions(graph) {
  let regions = 0;
  let visited = new Set();

  for (let node in graph) {
    if (checkRegion(node, graph, visited)) regions++;
  }

  return regions;
}

function checkRegion(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);

  graph[node].forEach((neighbor) => checkRegion(neighbor, graph, visited));

  return true;
}

module.exports = {
  numRegions,
};
