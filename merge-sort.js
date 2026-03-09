const mergeSort = (array) => {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return sort(mergeSort(left), mergeSort(right));
};

function sort(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  while (left.length) {
    arr.push(left.shift());
  }

  while (right.length) {
    arr.push(right.shift());
  }

  return arr;
}

module.exports = { mergeSort };
