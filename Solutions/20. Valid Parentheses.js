/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length <= 1) return false;
  
  let obj = {
      ')' : '(',
      ']' : '[',
      '}' : '{'
  }
  
  let arr = [];
  
  for(var i of s) {
      if(i in obj) {
          if(obj[i] !== arr.pop())
              return false;
      } else {
          arr.push(i);
      }
  }
  
  return arr.length===0 && i===s[s.length-1];
};