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

	insert(val, root=this.root) {
		const newNode = new TreeNode(val);

		if (!this.root) {
			this.root = newNode;
			return;
		}

		if (val < root.val) {
			if (root.left) {
				this.insert(val, root.left);
			} else {
				root.left = newNode;
			}
		} else {
			if (root.right) {
				this.insert(val, root.right);
			} else {
				root.right = newNode;
			}
		}
		
	}

	searchRecur(val, root=this.root) {
		if (!root) return false;

		if (val < root.val) {
			return this.searchRecur(val, root.left);
		} else if (val > root.val) {
			return this.searchRecur(val, root.right);
		} else if (val === root.val) {
			return true;
		}
	}

	searchIter(val) {
		let currentNode = this.root;

		while(currentNode) {
			if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else if ( val > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}

		return false;

	}
   
}

module.exports = {
    TreeNode,
    BST
};