const Tree = require("./index.js");

let tree;
beforeEach(() => {
  tree = new Tree([1, 2, 3, 4, 5]);
});

describe("Balanced Binary Search Tree", () => {
  it("build a balanced tree", () => {
    //                 3
    //            --------------
    //            1            4
    //          -----       -------------
    //       null    2     null         5

    //            3
    expect(tree.root.value).toBe(3);
    //            3   1
    expect(tree.root.left.value).toBe(1);
    //            3   1     2
    expect(tree.root.left.right.value).toBe(2);
    //            3   4
    expect(tree.root.right.value).toBe(4);
    //            3   4     5
    expect(tree.root.right.right.value).toBe(5);
  });

  it("works on unsorted array by sorting the array first", () => {
    //                 4
    //            --------------
    //            1            7
    //          -----       -------------
    //       null    3     null         23
    //                              ----------
    let unsortedArray = [1, 7, 4, 23, 3];
    const newTree = new Tree(unsortedArray);
    //               4
    expect(newTree.root.value).toBe(4);
    //              4     1
    expect(newTree.root.left.value).toBe(1);
    //               4    1    3
    expect(newTree.root.left.right.value).toBe(3);
    //               4    7
    expect(newTree.root.right.value).toBe(7);
    //               4    7    23
    expect(newTree.root.right.right.value).toBe(23);
  });

  it("returns true if the given value is within the tree, tree.inlcudes()", () => {
    expect(tree.includes(1)).toBe(true);
    expect(tree.includes(2)).toBe(true);
    expect(tree.includes(3)).toBe(true);
    expect(tree.includes(6)).toBe(false);
    expect(tree.includes(21)).toBe(false);
  });

  it("checks if the new node added exists", () => {
    //                 3
    //            --------------
    //            1            4
    //          -----       -------------
    //       null    2     null         5
    //                              ----------
    //                            null       8
    tree.insert(8);
    expect(tree.includes(8)).toBe(true);
  });

  it("insert new nodes at the lowest level", () => {
    //                 3
    //            --------------
    //            1            4
    //          -----       -------------
    //       null    2     null         5
    //                              ----------
    //                            null       8
    //                                  -----------
    //                                  7         null
    tree.insert(8);
    //            3    4     5     8
    expect(tree.root.right.right.right.value).toBe(8);
    tree.insert(7);
    //            3    4     6     8     7
    expect(tree.root.right.right.right.left.value).toBe(7);
  });

  it("removes a node from the tree", () => {
    const newTree = new Tree([1, 2, 3]);
    newTree.delete(3);
    expect(newTree.includes(3)).toBe(false);
  });

  it("keeps the branches of the node that's being deleted", () => {
    const newTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    //                 5
    //            --------------
    //            2            7
    //        -------       -----------
    //        1    3        6         8
    //           -----          -------------
    //        null    4         null        9

    newTree.delete(2);
    expect(newTree.includes(2)).toBe(false);
    expect(newTree.includes(3)).toBe(true);
    expect(newTree.includes(1)).toBe(true);
    expect(newTree.includes(4)).toBe(true);
  });
});
