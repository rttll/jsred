require('../src/functions/first');

describe('Array.prototype.first()', () => {
  test('Array.first is a function', () => {
    expect(typeof Array.prototype.first).toBe('function');
  });

  test('Returns null from empty array', () => {
    const emptyArr = new Array();
    expect(emptyArr.first()).toBe(null);
  });

  test('Returns first element in array', () => {
    const arr = ['hello', 'world'];
    expect(arr.first()).toBe(arr[0]);
  });
});
