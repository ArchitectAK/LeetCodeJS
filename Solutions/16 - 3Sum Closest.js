/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let closest=Infinity;
  nums= nums.sort((a,b)=> a-b)
  for (let i = 0; i < nums.length-2; i++) {
      let  a = i+1;
      let b = nums.length-1;
  while(a<b) {
          let tar =nums[i]+nums[a]+nums[b];  
          if(Math.abs(tar - target) < Math.abs(closest - target)){
              closest=tar;
          }
          (target>tar)? a++:b--               
  } 
  }
  return closest; 
};