const fs = require('fs');
const path = require('path');

const readFromFile = (fileName) => {
  return fs.readFileSync(path.resolve(__dirname, fileName), 'utf8').split('\n');
};

const parseCommand = (cmd) => {
  const [direction, value] = cmd.split(' ');
  const distance = parseInt(value);
  switch (direction) {
    case 'forward':
      return { h: distance, d: 0 };
    case 'down':
      return { h: 0, d: distance };
    case 'up':
      return { h: 0, d: -distance };
    default:
      console.error(`Unknown command direction: ${direction}`);
  }
};

const calculatePosition = (commands) => {
  const pos = { h: 0, d: 0 };
  for (const cmd of commands) {
    const posChange = parseCommand(cmd);
    pos.h += posChange.h;
    pos.d += posChange.d;
  }
  return pos;
};

const multiplyPosition = (pos) => {
  return pos.h * pos.d;
};

const parseCommand2 = (cmd) => {
  const [direction, valueStr] = cmd.split(' ');
  const value = parseInt(valueStr);
  const posChange = { movement: 0, aim: 0 };
  switch (direction) {
    case 'forward':
      return { movement: value, aim: 0 };
    case 'down':
      return { movement: 0, aim: value };
    case 'up':
      return { movement: 0, aim: -value };
  }
  return posChange;
};

const calculatePosition2 = (commands) => {
  const pos = { h: 0, d: 0, aim: 0 };
  for (const cmd of commands) {
    const posChange = parseCommand2(cmd);
    pos.aim += posChange.aim;
    pos.h += posChange.movement;
    pos.d += posChange.movement * pos.aim;
  }
  return pos;
};

const input = readFromFile('./input.txt');
const pos = calculatePosition(input);
console.log(
  `Part 1: What do you get if you multiply your final horizontal position by your final depth? ${multiplyPosition(
    pos,
  )}`,
);

const pos2 = calculatePosition2(input);
console.log(
  `Part 2: What do you get if you multiply your final horizontal position by your final depth? ${multiplyPosition(
    pos2,
  )}`,
);

module.exports = {
  readFromFile,
  calculatePosition,
  calculatePosition2,
  parseCommand,
  parseCommand2,
  multiplyPosition,
};
