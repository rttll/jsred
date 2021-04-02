if (!Array.prototype.toObject) {
  function toObject() {
    const obj = {};
    for (let arr of this) {
      if (!Array.isArray(arr)) {
        throw new Error(
          `JSRed: Thing at ${this.indexOf(
            arr
          )} must be an array, was ${typeof arr}`
        );
      }
      if (arr.length !== 2) {
        throw new Error(
          `JSRed: Array at ${this.indexOf(arr)} must be length 2, was ${
            arr.length
          }`
        );
      }
      obj[arr[0]] = arr[1];
    }
    return obj;
  }
  Array.prototype.toObject = toObject;
}
