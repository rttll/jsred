require('../src/functions/includes');

describe('Array.prototype.includes', () => {
  test('Returns true if value in array', () => {
    const arr = [1, 2, 3];
    expect(arr.includes(1)).toBe(true);
  });

  test('Returns false if value not in array', () => {
    const arr = [1, 2, 3];
    expect(arr.includes(4)).toBe(false);
  });
});

describe('String.prototype.includes', () => {
  test('Returns true if value in string', () => {
    const str = 'abc';
    expect(str.includes('a')).toBe(true);
  });

  test('Returns false if value not in string', () => {
    const str = 'abc';
    expect(str.includes('d')).toBe(false);
  });
});

describe('Object.prototype.includes', () => {
  test('Returns true if key in object', () => {
    const obj = { foo: 'bar' };
    expect(obj.includes('foo')).toBe(true);
  });
  test('Returns false if key not in object', () => {
    const obj = { foo: 'bar' };
    expect(obj.includes('zoo')).toBe(false);
  });
});
