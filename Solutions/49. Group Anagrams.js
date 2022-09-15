/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  let result = {}
  for (let s of strs){
      let key = s.split("").sort().join("")
      result[key] ? result[key].push(s) : result[key] = [s]
  }
  return Object.values(result)
};