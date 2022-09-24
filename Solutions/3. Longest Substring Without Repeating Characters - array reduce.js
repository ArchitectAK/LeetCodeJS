/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  // keeps track of the most recent index of each letter.
  const map = {};
  // keeps track of the starting index of the current substring.
  let left = 0;
  
  return s.split('').reduce((max, v, i) => {
      // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
      left = map[v] >= left ? map[v] + 1 : left;
      // updates last recorded index of letter to the most recent index.
      map[v] = i;
      
      // indices of current substring is (idx - leftIdx, idx).
      // +1 because if your substring starts and ends at index 0, it still has a length of 1.
      return Math.max(max, i - left + 1);
  }, 0)  
};