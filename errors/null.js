function NullError(message) {
  this.name = "NullError";
  this.message = message;
  this.stack = new Error().stack;
}
NullError.prototype = new Error();

module.exports = NullError;
