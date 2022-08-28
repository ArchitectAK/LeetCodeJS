/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n === 0) return 1;
  
let result = Math.abs(n) % 2===0 ? myPow(x*x,Math.abs(n)/2) : myPow(x*x,(Math.abs(n) - 1)/2) * x;
  
  return n < 0 ? 1/result : result;
};