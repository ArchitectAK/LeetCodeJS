/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
  let y = mat.length;
  let x = mat[0].length - 1;
  
  // Start far enough to the left to get
  for (let i = 2 - y; i < x; i++) {
    // all non-singleton diagonals
    let diag = new Array(y);
    let k = 0;
    
    for (let j = 0; j < y; j++) {
      // Only store valid cell values in the array   
      if (mat[j][i+j]) {
          diag[k++] = mat[j][i+j];
      }
    }
    
    // Sort the diagonal and reset its index
    diag.sort((a,b) => a - b), k = 0
    for (let j = 0; j < y; j++) {
      // Replace the diagonal cells in sorted order
      if (mat[j][i+j]) {
          mat[j][i+j] = diag[k++];
      }
    }
  }
  
  return mat
};