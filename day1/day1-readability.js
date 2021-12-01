const fs = require('fs');

//helpers
const readFileOfNumbers = (path) =>
  fs
    .readFileSync(path, 'utf8')
    .split('\n')
    .map((string) => parseInt(string));

const toSum = (current, sum) => current + sum;

const sumWindow = (array, startIndex, windowSize) => {
  const window = array.slice(startIndex, startIndex + windowSize);
  return window.reduce(toSum);
};

const toSumsOf = (windowSize) => (val, idx, arr) => {
  const hasFullWindowLength = arr[idx + windowSize - 1];
  return hasFullWindowLength ? sumWindow(arr, idx, windowSize) : undefined;
};

const removeUndefined = (x) => !!x;

const toIncreaseCount = (count, current, index, array) => {
  const prev = array[index - 1];
  return current > prev ? count + 1 : count;
};

//solution
const input = readFileOfNumbers('input.txt');

const increaseCount = input.reduce(toIncreaseCount, 0);
console.log(
  `Part 1: How many measurements are larger than the previous measurement?  ${increaseCount}`,
);

const increaseCountOfSummedWindows = input
  .map(toSumsOf(3))
  .filter(removeUndefined)
  .reduce(toIncreaseCount, 0);
console.log(
  `Part 2: How many sums are larger than the previous sum? ${increaseCountOfSummedWindows}`,
);
