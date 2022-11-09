function stringLength(string) {
    return string.split('').reduce((length) => length + 1, 0);
}


// function stringLength(string) {
//     const arr = string.split("");
//     const count = arr.length;
//      if (count <= 10 && count >= 1){
//       return count;
//      }
//      else {
//        return "not good"
//      }
//   }

  module.exports = stringLength;


