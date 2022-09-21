/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
  let s = 0;
  // get sum of all evens
  for (let num of nums){
      if(num%2 ==0){
          s += num;
      }
  }
  // sum of all evens after above loop
  // s = 2 + 4 = 6
  
  let ans = [];
  
  for (let i =0; i< queries.length; ++i){
      // get values from queries
      let val = queries[i][0]; // 1, -3, -4, 2
      
      // get indices from queries
      let index = queries[i][1]; // 0, 1, 0, 3
      
      // update s if current value on current index in nums is even
      if(nums[index] %2 == 0) s -= nums[index] // _, 
      
      // update current value on current index from queries
      nums[index] += val; // 1+1, 2-3,  
      
      // update s if current value on current index in nums is even
      if(nums[index] %2 == 0) s += nums[index] // 6 + 2, _  
      
      // add s to ans array
      ans[i] = s; // 8, 6, 
  }
  
  return ans;
};