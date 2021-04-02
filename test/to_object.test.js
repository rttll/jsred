require('../src/functions/to_object');

describe('Array.prototype.toObject', () => {
  test('Converts an array of arrays into an object', () => {
    const arr = [
      ['12', { id: '12', name: 'foo' }],
      ['13', { id: '13', name: 'bar' }],
    ];
    const result = {
      12: { id: '12', name: 'foo' },
      13: { id: '13', name: 'bar' },
    };
    expect(arr.toObject()).toEqual(result);
  });

  test('Throws error if arrays are wrong length', () => {
    const arr = [['key', { foo: 'bar' }, '3rd element']];
    expect(() => {
      arr.toObject();
    }).toThrow();
  });

  test('Throws error if any element is not an array', () => {
    const arr = [
      ['key', { foo: 'bar' }],
      ['hi', 'there'],
      'oops, Im not an array',
    ];
    expect(() => {
      arr.toObject();
    }).toThrow();
  });
});
