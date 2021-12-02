const {
  readFromFile,
  calculatePosition,
  parseCommand,
  multiplyPosition,
  parseCommand2,
  calculatePosition2,
} = require('./day2');

describe('Day 2, part 1', () => {
  it('should read input from file', () => {
    const input = readFromFile('./input.txt');
    expect(input).toBeDefined();
    expect(input).toHaveLength(1000);
  });

  it('should parse input', () => {
    const positionChange = parseCommand('forward 5');
    expect(positionChange).toHaveProperty('h');
    expect(positionChange).toHaveProperty('d');
    expect(positionChange.d).toEqual(0);
    expect(positionChange.h).toEqual(5);
  });

  it('should calculate position', () => {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    const position = calculatePosition(input);
    expect(position).toHaveProperty('h');
    expect(position).toHaveProperty('d');
    expect(position.d).toEqual(10);
    expect(position.h).toEqual(15);
  });

  it('should calculate multiplied position', function () {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    const multipliedPosition = multiplyPosition(calculatePosition(input));
    expect(multipliedPosition).toEqual(150);
  });
});

describe('Day 2, part 2', () => {
  it('should parse input', () => {
    const positionChange = parseCommand2('forward 5');
    expect(positionChange).toHaveProperty('movement');
    expect(positionChange).toHaveProperty('aim');
    expect(positionChange.movement).toEqual(5);
    expect(positionChange.aim).toEqual(0);
  });

  it('should calculate position', () => {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    const position = calculatePosition2(input);
    expect(position).toHaveProperty('h');
    expect(position).toHaveProperty('d');
    expect(position.d).toEqual(60);
    expect(position.h).toEqual(15);
  });

  it('should calculate multiplied position', function () {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    const multipliedPosition = multiplyPosition(calculatePosition2(input));
    expect(multipliedPosition).toEqual(900);
  });
});
