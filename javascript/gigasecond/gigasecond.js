var Gigasecond = function(date) {
  this.unixDate = date.getTime();
};

Gigasecond.prototype.date = function() {
  return new Date(this.unixDate + Math.pow(10,12));
}

module.exports = Gigasecond;
