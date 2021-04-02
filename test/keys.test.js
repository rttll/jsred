require('../src/functions/keys');

describe('Object.keys', () => {
  test('Object.keys is a function', () => {
    expect(typeof {}.keys).toBe('function');
  });

  test('Returns all property names from an object', () => {
    const obj = { foo: 'bar', blue: 'whale' };
    expect(obj.keys()).toEqual(['foo', 'blue']);
  });
});
