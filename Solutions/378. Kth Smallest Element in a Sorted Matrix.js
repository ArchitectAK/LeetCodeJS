/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let n = matrix.length
    let a = new Array(n*n)
    let v=0
         
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            a[v] = matrix[i][j];
            v++;
        }
    }
         
    a.sort(function(a,b){ return a-b})
    let result = a[k-1];
    return result;
};