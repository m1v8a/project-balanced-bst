const Tree = require("./index.js");

let tree;
beforeEach(() => {
  tree = new Tree([1, 2, 3, 4, 5]);
});

describe("Balanced Binary Search Tree", () => {
  it("build a balanced tree", () => {
    expect(tree.root.value).toBe(3);
    expect(tree.root.left.value).toBe(1);
    expect(tree.root.left.right.value).toBe(2);
    expect(tree.root.right.value).toBe(4);
    expect(tree.root.right.right.value).toBe(5);
  });

  it("works on unsorted array by sorting the array first", () => {
    let unsortedArray = [1, 7, 4, 23, 3];
    const newTree = new Tree(unsortedArray);
    expect(newTree.root.value).toBe(4);
    expect(newTree.root.left.value).toBe(1);
    expect(newTree.root.left.right.value).toBe(3);
    expect(newTree.root.right.value).toBe(7);
    expect(newTree.root.right.right.value).toBe(23);
  });

  it("returns true if the given value is within the tree, tree.inlcudes()", () => {
    expect(tree.includes(1)).toBe(true);
    expect(tree.includes(2)).toBe(true);
    expect(tree.includes(3)).toBe(true);
    expect(tree.includes(6)).toBe(false);
    expect(tree.includes(21)).toBe(false);
  });

  it("inserts a new node at the correct place while still maintaining a balanced tree, inserting to the right", () => {
    tree.insert(7);
    expect(tree.root.right.right.right.value).toBe(7);
    tree.insert(6);
    expect(tree.root.right.right.right.value).toBe(6);
    expect(tree.root.right.right.right.right.value).toBe(7);
  });
});
