function depthFirstSearch(root, targetVal) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.val === targetVal) return node;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return null;
}

module.exports = {
  depthFirstSearch,
};
