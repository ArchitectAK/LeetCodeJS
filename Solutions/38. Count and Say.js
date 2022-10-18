/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  let currentString = '1'
  for (let i = 2; i<= n; i++){
      let nextString = ''
      for (let j = 0, k = 0 ; j < currentString.length; j=k){
          while(k < currentString.length && currentString.charAt(k) == currentString.charAt(j))
              k++
          nextString += (k-j) + currentString.charAt(j)
      }
      currentString = nextString
  }
  return currentString
};