class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insert(val, root.left);
      }
    }

    if (val >= root.val) {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;
    if (val === root.val) return true;
    if (val < root.val) return this.searchRecur(val, root.left);
    if (val > root.val) return this.searchRecur(val, root.right);
  }

  searchIter(val) {
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  TreeNode,
  BST,
};
