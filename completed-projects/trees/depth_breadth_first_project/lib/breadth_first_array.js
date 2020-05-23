function breadthFirstArray(root) {
  const res = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
}

module.exports = {
  breadthFirstArray,
};
