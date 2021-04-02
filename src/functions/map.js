if (Object.prototype.map === undefined) {
  Object.prototype.map = function (fn) {
    return Object.keys(this).map((key) => fn(key, this[key]));
  };
}
