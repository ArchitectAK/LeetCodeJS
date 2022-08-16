/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let charMap = new Map();
  for (let i = 0; i < s.length; i++) {
      charMap.set(s[i], charMap.get(s[i]) + 1 || 1);
  }
  
  for (let i = 0; i < s.length; i++) {
      if (charMap.get(s[i]) === 1) return i;
  }
  
  return -1;
};