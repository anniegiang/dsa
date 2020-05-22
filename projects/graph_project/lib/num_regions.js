function numRegions(graph) {
  let num = 0;
  let visited = new Set();

  for (let node in graph) {
    if (isNewRegion(node, graph, visited)) num++;
  }

  return num;
}

function isNewRegion(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);
  graph[node].forEach((neighbor) => {
    isNewRegion(neighbor, graph, visited);
  });
  return true;
}

module.exports = {
  numRegions,
};
