function breadthFirstSearch(startingNode, targetVal) {
  const visited = new Set();
  const queue = [startingNode];

  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    if (node.val === targetVal) return node;
    queue.push(...node.neighbors);
  }
  return null;
}

module.exports = {
  breadthFirstSearch,
};
