const sum = require('./index');

test('adds 1+2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 3+2 = 5', () => {
    expect(sum(3, 2)).toBe(5);
  });

  test('adds 1+1 = 3', () => {
    expect(sum(1, 1)).toBe(2);
  });