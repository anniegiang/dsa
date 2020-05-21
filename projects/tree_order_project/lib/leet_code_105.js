// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);

  const leftInOrder = inorder.slice(0, rootIndex);
  const rightInOrder = inorder.slice(rootIndex + 1);

  const leftPreOrder = preorder.filter((val) => leftInOrder.includes(val));
  const rightPreOrder = preorder.filter((val) => rightInOrder.includes(val));

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);
  return root;
}
