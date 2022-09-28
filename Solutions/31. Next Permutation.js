/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
  for(let i = nums.length-1; i >= 0; i--) {
      if(nums[i] < nums[i+1]) {
          const large = nextLarge(i);
          swap(i, large);
          reverse(i+1);
          return;
      }
  }

// If there is no next permutation reverse the arr
  nums.reverse()
  
  function swap(i, j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  
  function reverse(idx) {
      let start = idx, end = nums.length-1;
      
      while(start < end) {
          swap(start, end);
          start++;
          end--;
      }
  }
  
  function nextLarge(idx) {
      for(let i = nums.length-1; i > idx; i--) {
          if(nums[i] > nums[idx]) return i;
      }
  }
};