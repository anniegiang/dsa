function inOrderArray(root) {
  if (!root) return [];
  const left = inOrderArray(root.left);
  const right = inOrderArray(root.right);
  return left.concat([root.val]).concat(right);
}

function postOrderArray(root) {
  if (!root) return [];
  const left = postOrderArray(root.left);
  const right = postOrderArray(root.right);
  return left.concat(right).concat([root.val]);
}

module.exports = {
  inOrderArray,
  postOrderArray,
};
