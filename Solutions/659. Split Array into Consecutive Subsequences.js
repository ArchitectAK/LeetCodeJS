/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
  if(nums.length < 3) return false;
  
  const frequencyMap = new Map(), appendfrequencyMap = new Map();
  nums.forEach(number => {
      if (!frequencyMap.has(number))
          frequencyMap.set(number, 0);
      
      frequencyMap.set(number, frequencyMap.get(number) + 1);
  });
  
   for (let i of nums) {
      if (frequencyMap.get(i) == 0) continue;
      else if ((appendfrequencyMap.get(i) || 0) > 0) {
          appendfrequencyMap.set(i, appendfrequencyMap.get(i) - 1);
          appendfrequencyMap.set(i+1, (appendfrequencyMap.get(i+1) || 0) + 1);
      }   
      else if ((frequencyMap.get(i+1) || 0) > 0 && (frequencyMap.get(i+2) || 0) > 0) {
          frequencyMap.set(i+1, frequencyMap.get(i+1) - 1);
          frequencyMap.set(i+2, frequencyMap.get(i+2) - 1);
          appendfrequencyMap.set(i+3, (appendfrequencyMap.get(i+3) || 0) + 1);
      }
      else return false;
      frequencyMap.set(i, frequencyMap.get(i) - 1);
  }
  return true;
  
};