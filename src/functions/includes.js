if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) > -1;
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function (value) {
    return this.indexOf(value) > -1;
  };
}

if (!Object.prototype.includes) {
  Object.prototype.includes = function (value) {
    return Object.keys(this).indexOf(value) > -1;
  };
}
