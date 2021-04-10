require('../src/functions/is_empty.js');

describe('Array.prototype.empty', () => {
  test('Returns true if array.length is 0', () => {
    expect([].isEmpty()).toBe(true);
  });
});

describe('Object.prototype.empty', () => {
  test('Returns true if object has no properties', () => {
    expect({}.isEmpty()).toBe(true);
  });
});
