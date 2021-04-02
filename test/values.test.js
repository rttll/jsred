require('../src/functions/values');

describe('Object.prototype.values', () => {
  test('it returns an array of property values', () => {
    const obj = { foo: 'bar' };
    expect(obj.values()).toEqual(['bar']);
  });
});
