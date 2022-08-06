/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    
  const [count] = s.match(p) || [];
  return count === s;
};