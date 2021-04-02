require('../src/functions/map');

const obj = { foo: 'bar', blue: 'bear' };

describe('Object.map', () => {
  test('Object.map is a function', () => {
    expect(typeof {}.map).toBe('function');
  });

  test('Returns an array', () => {
    const res = { foo: 'bar' }.map((k, v) => v);
    expect(Array.isArray(res)).toBe(true);
  });

  test('Applies function to each entry in Object', () => {
    const res2 = obj.map((k, v) => ({ [k]: `hello ${v}` }));
    expect(res2).toEqual([{ foo: 'hello bar' }, { blue: 'hello bear' }]);
  });
});
