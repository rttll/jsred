const version = require('../package.json').version;
require(`../dist/jsred.${version}`);

describe('All methods registered correctly', () => {
  test('first', () => {
    expect(typeof [].first).toBe('function');
    expect(typeof {}.first).toBe('function');
  });

  test('toObject', () => {
    expect(typeof [].toObject).toBe('function');
  });

  test('keys', () => {
    expect(typeof {}.keys).toBe('function');
  });

  test('values', () => {
    expect(typeof {}.values).toBe('function');
  });

  test('map', () => {
    expect(typeof {}.map).toBe('function');
  });
});
