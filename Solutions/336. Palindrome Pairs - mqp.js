/**
 * @param {string[]} words
 * @return {number[][]}
 */
 var palindromePairs = function(words) {
  let wordMap = new Map()
  let ans = []
  
  for (let i = 0; i < words.length; i++)
      wordMap.set(words[i], i)
  
  for (let i = 0; i < words.length; i++) {
      if (words[i] === "") {
          for (let j = 0; j < words.length; j++)
              if (isPalindrome(words[j]) && j !== i)
                  ans.push([i, j], [j, i])
          continue
      }
      
      let reversedWord = words[i].split("").reverse().join("")
      
      let res = wordMap.get(reversedWord)
      
      if (res !== undefined && res !== i)
          ans.push([i, res])
      for (let j = 1; j < reversedWord.length; j++) {
          if (isPalindrome(reversedWord, 0, j - 1)) {
              let res = wordMap.get(reversedWord.slice(j))
              if (res !== undefined)
                  ans.push([i, res])
          }
          if (isPalindrome(reversedWord, j)) {
              let res = wordMap.get(reversedWord.slice(0,j))
              if (res !== undefined)
                  ans.push([res, i])
          }
      }
  }
  return ans
};

const isPalindrome = (word, i=0, j = word.length-1) => {
  while (i < j)
      if (word[i++] !== word[j--]) return false
  return true
}