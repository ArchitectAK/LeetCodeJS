/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const arr = [];
  const compose = (left, right, str) => {
      if (!left && !right && str.length) return arr.push(str);
      if (left) compose(left - 1, right, str + '(');
      if (right > left) compose(left, right - 1, str + ')');
  }  
  
  compose(n, n, '');
  return arr;
};