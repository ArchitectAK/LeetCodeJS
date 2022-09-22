/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let answer = []
  let words = s.split(" ");
  for (let word of words){
      answer.push(word.split("").reverse().join(""))
  }
  return answer.join(" ")
};