const { mergeSort } = require("./merge-sort");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  buildTree(arr, start, end) {
    const sortedArr = [...new Set(mergeSort(arr))];

    function build(arr, start, end) {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const root = new Node(arr[mid]);

      root.left = build(arr, start, mid - 1);
      root.right = build(arr, mid + 1, end);

      return root;
    }

    return build(sortedArr, start, end);
  }

  includes(value) {
    function traverse(root) {
      if (root === null) return false;

      if (root.value === value) return true;

      if (value < root.value) {
        return traverse(root.left);
      } else if (value > root.value) {
        return traverse(root.right);
      }
    }

    return traverse(this.root);
  }

  insert(value) {
    const node = new Node(value);

    traverse(this.root);

    function traverse(root) {
      if (root === null) return null;

      if (value > root.value) {
        if (root.right === null) {
          root.right = node;
        } else if (value < root.right.value) {
          node.right = root.right;
          root.right = node;
        } else {
          traverse(root.right);
        }
      } else if (value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else if (value > root.left.value) {
          node.left = root.right;
          root.left = node;
        } else {
          traverse(root.left);
        }
      }
    }
  }
}

module.exports = Tree;
