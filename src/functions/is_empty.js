if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}

if (!Object.prototype.isEmpty) {
  Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
  };
}
