/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversed = Math.abs(x).toString().split('').reverse().join('')
  const reversedInt = parseInt(reversed) * Math.sign(x);
  return (reversedInt <= 0x7fffffff && reversedInt >= -0x80000000) ? reversedInt : 0;
};