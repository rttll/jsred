if (!Object.prototype.values) {
  Object.prototype.values = function () {
    return Object.values(this);
  };
}
