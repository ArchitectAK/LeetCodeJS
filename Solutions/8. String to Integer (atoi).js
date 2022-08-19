/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  // parse int from string s
  // take minimum of parsed int (or 0, if string has not int) and 2147483647 (max int)
  // take maximum of int recived from above step and -2147483648 (min int)
  // return
  return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)  
};