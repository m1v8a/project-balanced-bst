const Tree = require("./tree");

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
}

function log(desc, root, callback, showDiff = true) {
  if (!callback) {
    console.log(desc);
    prettyPrint(root);
  } else {
    if (showDiff) {
      console.log(desc);
      console.log("before");
      prettyPrint(root);
      console.log("after");
      prettyPrint(callback());
    } else {
      console.log(desc);
      prettyPrint(root);
      callback();
    }
  }
}

// -------------------------------------------

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log("build", tree.root);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log("insert(27)", tree.root, () => {
  tree.insert(27);
});

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log("insert already existing value (do nothing) / insert(9)", tree.root, () => {
  tree.insert(9);
  return tree.root;
});

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log("delete(7) / a leaf node", tree.root, () => {
  tree.delete(7);
  return tree.root;
});

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that hava one leaf node (left) / delete(9)",
  tree.root,
  () => {
    tree.delete(9);
    return tree.root;
  },
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that have one leaf node (right) / delete(5)",
  tree.root,
  () => {
    tree.delete(5);
    return tree.root;
  },
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that hava both left and right leaf nodes / delete(67)",
  tree.root,
  () => {
    tree.delete(67);
    return tree.root;
  },
);

tree = new Tree([
  1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 82, 52, 321, 322,
]);
log(
  "delete a node that hava both left and right leaf nodes / delete(321)",
  tree.root,
  () => {
    tree.delete(321);
    return tree.root;
  },
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "levelOrderForeach",
  tree.root,
  () => {
    let arr = [];
    tree.levelOrderForEach((value) => {
      arr.push(value);
    });
    console.log("result:", arr);
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "levelOrderForeach",
  tree.root,
  () => {
    let arr = [];
    tree.levelOrderForEach((value) => {
      arr.push(value);
    });
    console.log("result:", arr);
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "levelOrderForeach / no callback given",
  tree.root,
  () => {
    try {
      tree.levelOrderForEach();
    } catch (err) {
      console.error("result:", err);
    }
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "inorderForEach",
  tree.root,
  () => {
    const arr = [];
    tree.inOrderForEach((data) => {
      arr.push(data);
    });
    console.log("result:", arr);
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "preOrderForEach",
  tree.root,
  () => {
    const arr = [];
    tree.preOrderForEach((data) => {
      arr.push(data);
    });
    console.log("result:", arr);
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "postOrderForEach",
  tree.root,
  () => {
    const arr = [];
    tree.postOrderForEach((data) => {
      arr.push(data);
    });
    console.log("result:", arr);
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(322);
tree.insert(321);
log(
  "height(67)",
  tree.root,
  () => {
    console.log("result:", tree.height(67));
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(322);
tree.insert(321);
tree.insert(320);
log(
  "depth(320)",
  tree.root,
  () => {
    console.log("result:", tree.depth(320));
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "isBalanced(), should be true",
  tree.root,
  () => {
    console.log("result:", tree.isBalanced());
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(24);
tree.insert(25);
log(
  "isBalanced(), should be false",
  tree.root,
  () => {
    console.log("result:", tree.isBalanced());
  },
  false,
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.insert(24);
tree.insert(25);
tree.insert(10);
log("reBalance()", tree.root, () => {
  tree.reBalance();
  return tree.root;
});
