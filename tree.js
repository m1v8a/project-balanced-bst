const { mergeSort } = require("./merge-sort");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.build(array);
  }

  build(array) {
    const sorted = [...new Set(mergeSort(array))];

    function traverse(start, end) {
      if (start > end) return null;
      const mid = Math.floor((start + end) / 2);
      const root = new Node(sorted[mid]);

      root.left = traverse(start, mid - 1);
      root.right = traverse(mid + 1, end);

      return root;
    }

    return traverse(0, sorted.length - 1);
  }

  insert(value) {
    const node = new Node(value);
    traverse(this.root);

    function traverse(root) {
      if (!root) return node;

      if (value < root.data) {
        root.left = traverse(root.left);
      } else if (value > root.data) {
        root.right = traverse(root.right);
      } else if (value === root.data) {
        return root;
      }

      return root;
    }
  }

  delete(value) {
    traverse(this.root, value);

    function traverse(root, value) {
      if (root === null) return root;

      if (value < root.data) {
        root.left = traverse(root.left, value);
      } else if (value > root.data) {
        root.right = traverse(root.right, value);
      } else {
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }

        const successor = (() => {
          let curr = root.right;
          while (curr && curr.left) {
            curr = curr.left;
          }
          return curr;
        })();
        root.data = successor.data;
        root.right = traverse(root.right, successor.data);
      }
      return root;
    }
  }

  levelOrderForEach(callback) {
    if (!callback) {
      throw Error("A callback is required");
    }
    traverse([this.root]);

    function traverse(q) {
      if (!q.length) return;

      if (q[0].left) {
        q.push(q[0].left);
      }
      if (q[0].right) {
        q.push(q[0].right);
      }

      callback(q[0].data);
      q.shift();
      traverse(q);
    }
  }

  inOrderForEach(callback) {
    if (!callback) {
      throw Error("A callback is required");
    }
    traverse(this.root);

    function traverse(root) {
      if (!root) return;

      traverse(root.left);
      callback(root.data);
      traverse(root.right);
    }
  }

  preOrderForEach(callback) {
    if (!callback) {
      throw Error("A callback is required");
    }
    traverse(this.root);

    function traverse(root) {
      if (!root) return;

      callback(root.data);
      traverse(root.left);
      traverse(root.right);
    }
  }

  postOrderForEach(callback) {
    if (!callback) {
      throw Error("A callback is required");
    }
    traverse(this.root);

    function traverse(root) {
      if (!root) return;

      traverse(root.left);
      traverse(root.right);
      callback(root.data);
    }
  }

  // TODO
  height() {}

  depth(value) {}

  isBalanced() {}
}

module.exports = Tree;
