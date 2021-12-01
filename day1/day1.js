const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((string) => parseInt(string));

const increaseCount = input.reduce((acc, cur, idx, arr) => (cur > arr[idx - 1] ? acc + 1 : acc), 0);
console.log(
  `Part 1: How many measurements are larger than the previous measurement?  ${increaseCount}`,
);

const increaseCountOfSummedWindows = input
  .map((val, idx, arr) => (arr[idx + 2] ? arr[idx] + arr[idx + 1] + arr[idx + 2] : undefined))
  .filter((x) => !!x)
  .reduce((acc, cur, idx, arr) => (cur > arr[idx - 1] ? acc + 1 : acc), 0);
console.log(
  `Part 2: How many sums are larger than the previous sum? ${increaseCountOfSummedWindows}`,
);
