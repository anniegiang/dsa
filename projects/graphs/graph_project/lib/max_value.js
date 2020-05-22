function maxValue(node, visited = new Set()) {
  if (visited.has(node)) return -Infinity;
  visited.add(node);
  const max = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
  return Math.max(node.val, ...max);
}

module.exports = {
  maxValue,
};
