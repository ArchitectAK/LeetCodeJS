/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const letterMap = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }
  
  if(digits === '') return [];

  let sub = letterCombinations(digits.slice(1));
  let ans = [];
  let start = digits[0] - '0';
  for(let ch of letterMap[start]){
      for(let str of sub) {
          ans.push(ch+str);
      }
  }
  if(ans.length === 0) {
      ans=[...letterMap[start]]
  }
  return ans;
};