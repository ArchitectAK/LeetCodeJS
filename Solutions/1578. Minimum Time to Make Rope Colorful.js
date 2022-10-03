/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
 var minCost = function(colors, neededTime) {
  
  let totalTime = 0
  let i = 0, j = 0
  
  while(i < neededTime.length && j < neededTime.length) {
    let currentTotal = 0, currentMax = 0
    
    while(j< neededTime.length && colors[i] == colors[j]){
      currentTotal += neededTime[j]
      currentMax = Math.max(currentMax, neededTime[j])
      j++
    }
    totalTime += currentTotal - currentMax
    i = j
  }
  
  return totalTime
};