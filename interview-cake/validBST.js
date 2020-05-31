// https://www.interviewcake.com/question/javascript/bst-checker

// O(n) time and O(d) space (depth first search, adding d nodes where d is the depth of the tree)

// The time cost is easy: for valid binary search trees, we’ll have to check all n nodes.

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {
  // Determine if the tree is a valid binary search tree

  const s = [
    {
      node: treeRoot,
      lowerBound: -Infinity,
      upperBound: Infinity,
    },
  ];

  while (s.length) {
    const { node, lowerBound, upperBound } = s.pop();
    if (node.value <= lowerBound || node.value >= upperBound) return false;
    if (node.left) {
      s.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }
    if (node.right) {
      s.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }
  return true;
}

// Tests

let desc = "valid full tree";
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = "both subtrees valid";
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = "descending linked list";
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = "out of order linked list";
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = "one node tree";
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
