/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const dp = Array.from(nums, () => 1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
              max = Math.max(dp[i], max)   
          }
      }
  }
  return max;
};