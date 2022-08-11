/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  
  const ans = [];
  
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let left = j + 1;
          let right = nums.length - 1;

          const t = target - nums[i] - nums[j];

          while (left < right) {
              const s = nums[left] + nums[right];
              if (s === t) {
                  ans.push([nums[i], nums[j], nums[left], nums[right]]);
                  left++;
                  while (left < right && nums[left - 1] === nums[left]) left++;
                  right--;
                  while (left < right && nums[right] === nums[right + 1]) right--;
              } else if (s < t) {
                  left++;
              } else {
                  right--;
              }
          }
          while(j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      while(i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
  }
  
  return ans;
};