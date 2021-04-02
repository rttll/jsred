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

describe('Object.prototype.first()', () => {
  test('Object.first is a function', () => {
    expect(typeof Object.prototype.first).toBe('function');
  });

  test('Returns null from empty object', () => {
    const emptyObject = {};
    expect(emptyObject.first()).toBe(null);
  });

  test('Returns first key/pair', () => {
    const obj = { foo: 'bar', blue: 'bear' };
    expect(obj.first()).toStrictEqual({ foo: 'bar' });
  });
});
