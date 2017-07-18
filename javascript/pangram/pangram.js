var Pangram = function(sentence) {
  this.sentence = sentence;
};

var dedupArray = function(arr) {
  var new_arr = [];

  arr.forEach((val) => {
    if (new_arr.indexOf(val) === -1) {
      new_arr.push(val);
    }
  })

  return new_arr;
}

Pangram.prototype.isPangram = function() {
  return dedupArray(this.sentence.toLowerCase().split('').filter((letter) => (
    letter.match(/[a-z]/)
  ))).length === 26;
}

module.exports = Pangram;
