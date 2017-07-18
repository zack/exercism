var Bob = function() {
}

Bob.prototype.hey = function (input) {
  if (input.trim() === '') {
    return('Fine. Be that way!');
  } else if (input.match(/^(?=.*[A-Z].*)[A-Z,0-9\s]+[!?]?$/)) {
    return('Whoa, chill out!');
  } else if (input.match(/^(?!.*[a-z].*).*!$/)) {
    return('Whoa, chill out!');
  } else if (input.match(/\?$/)) {
    return('Sure.');
  } else {
    return('Whatever.');
  }
}

module.exports = Bob;
