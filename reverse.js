function reverse(reverseString) {
    const arr = reverseString.split("");
    const reverseArray = arr.reverse()
    const joinArray = reverseArray.join("");
    return joinArray
  }

  module.exports = reverse;