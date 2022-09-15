/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
  if(changed.length%2 == 1) return []
  let original = []
  changed.sort((a,b)=>a-b)
  const frequenceyMap = new Map()
  
  for(let number of changed) {
      const half = number/2
      if(frequenceyMap.has(half) && frequenceyMap.get(half) > 0) {
          original.push(half)
          frequenceyMap.set(half, frequenceyMap.get(half) - 1)
      } else {
          frequenceyMap.set(number, frequenceyMap.has(number) ? frequenceyMap.get(number) + 1 : 1)
      }
  }
  
  if(original.length !== changed.length/2) return []
  
  return original
  
};