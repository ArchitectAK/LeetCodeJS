/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  if(!height.length) return 0;
  let left = 0, right = height.length -1;
  let leftMax = 0, rightMax = 0;
  let ans = 0;
  while (left < right) {
      leftMax = Math.max(height[left], leftMax);
      rightMax = Math.max(height[right], rightMax);
      if(leftMax < rightMax) {
          ans += Math.max(0, leftMax - height[left])
          left++
      } else {
          ans += Math.max(0, rightMax - height[right])
          right--
      }
  }
  return ans;
};