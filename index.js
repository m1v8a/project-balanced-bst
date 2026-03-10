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
      callback();
      console.log("after");
      prettyPrint(root);
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
});

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log("delete(7) / a leaf node", tree.root, () => {
  tree.delete(7);
});

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that hava one leaf node (left) / delete(9)",
  tree.root,
  () => {
    tree.delete(9);
  },
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that have one leaf node (right) / delete(5)",
  tree.root,
  () => {
    tree.delete(5);
  },
);

tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
log(
  "delete a node that hava both left and right leaf nodes / delete(67)",
  tree.root,
  () => {
    tree.delete(67);
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
    console.log(arr);
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
    console.log(arr);
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
      console.error(err);
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
    console.log(arr);
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
    console.log(arr);
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
    console.log(arr);
  },
  false,
);
