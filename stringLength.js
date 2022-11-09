function stringLength(string) {
    return string.split('').reduce((length) => length + 1, 0);
}

  module.exports = stringLength;