/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  const dfs = (grid, row, column) => {
      let nR = grid.length;
      let nC = grid[0].length;
      
      if (row < 0 || column < 0 || row >= nR || column >= nC || grid[row][column] == 0)
          return;
      
      grid[row][column] = 0;
      dfs(grid, row-1, column);
      dfs(grid, row+1, column);
      dfs(grid, row, column-1);
      dfs(grid, row, column+1);
  }
  
  if (grid == null || grid.length == 0) {
    return 0;
  }

  let nR = grid.length;
  let nC = grid[0].length;
  let numIslands = 0;
  for (let r = 0; r < nR; ++r) {
    for (let c = 0; c < nC; ++c) {
      if (grid[r][c] == 1) {
        ++numIslands;
        dfs(grid, r, c);
      }
    }
  }

  return numIslands;
};