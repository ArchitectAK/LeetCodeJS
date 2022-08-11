/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let max = -1;
  let i=0, j=height.length-1;
  
  while(i<j){
      let min = Math.min(height[i], height[j]);
      let length = j-i;
      let filled = min * length;
      if(filled>max) max = filled;
      
      height[i]<height[j]? i++ : j--;
  }
  
  return max;
};