/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
  let map = new Map();
  let max = -1
  for(let start = 0, end = 0; end < fruits.length; end++){
      let currElement = fruits[end]
      map.set(currElement, map.get(currElement)+1 || 1 )
      while(map.size > 2){
          let char = fruits[start]
          let charCount = map.get(char)
          if(charCount-1 === 0)map.delete(char)
          else map.set(char, charCount-1)
          start++
      }
      if(map.size >= 1)max = Math.max(max, end + 1 - start)
  }
  return max
};