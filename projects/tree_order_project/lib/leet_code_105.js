// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const rootIdx = inorder.indexOf(root.val);

  const leftInorder = inorder.slice(0, rootIdx);
  const rightInorder = inorder.slice(rootIdx + 1);

  const leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  const rightPreorder = preorder.filter((val) => rightInorder.includes(val));

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}
