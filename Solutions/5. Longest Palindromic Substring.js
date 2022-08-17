/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (const j of [0, 1]) {
      let left = i;
      let right = i + j;
      while (left >= 0 && s[left] === s[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }

    // No better move exists
    if (Math.ceil(max.length / 2) >= s.length - i) break;
  }
  return max;
};