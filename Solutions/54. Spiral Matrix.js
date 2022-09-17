/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
         
  let rows = matrix.length, columns = matrix[0].length;
  let [left, right, top, bottom] = [0, columns - 1, 0, rows - 1];

  let arr = [];

  while(left <= right && top <= bottom){
      for(let i=left; i <= right; i++) arr.push(matrix[top][i])
      top++;

      for(let i = top; i <= bottom; i++) arr.push(matrix[i][right])
      right--;

      if(top <= bottom) {               // condition 1
          for(let i=right; i >= left; i--) arr.push(matrix[bottom][i])
          bottom--;
      }

      if(left <= right) {               // condition 2
          for(let i=bottom; i >= top; i--) arr.push(matrix[i][left])
          left++;
      }
  }
  
  return arr
};