/**
 * @param {number} n
 * @return {number}
 */
 var concatenatedBinary = function(n) {
  let num = 0;
  
  for(let i = 1; i <= n; i++) {
      num *= (2 ** i.toString(2).length) 
      num += i;
      num %= (10 ** 9 + 7)
  }
  return num;
};