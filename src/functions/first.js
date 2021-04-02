if (Array.prototype.first === undefined) {
  Array.prototype.first = function () {
    return this.length === 0 ? null : this[0];
  };
}

if (Object.prototype.first === undefined) {
  Object.defineProperty(Object.prototype, 'first', {
    value: function () {
      const keys = Object.keys(this);
      if (keys.length === 0) return null;
      const first = {};
      first[keys[0]] = this[keys[0]];

      return first;
    },
  });
}
