if (!Object.prototype.keys) {
  Object.prototype.keys = function () {
    return Object.keys(this);
  };
}
