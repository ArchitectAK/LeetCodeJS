/**
 * @param {string[]} words
 * @return {number[][]}
 */
 var palindromePairs = function(words) {
  let pairs = [];
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
          if(i == j) continue;
          
          let combined = words[i].concat(words[j]);
          
          let reversed = combined.split("").reverse().join("");
      
          if(combined == reversed) pairs.push([i, j])
      }
  }
  return pairs;
};