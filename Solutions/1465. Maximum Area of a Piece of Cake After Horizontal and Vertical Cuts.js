/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a,b) => a - b)
  verticalCuts.sort((a,b) => a - b)
  let maxh = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length-1]),
      maxv = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length-1])
  for (let i = 1; i < horizontalCuts.length; i++)
      maxh = Math.max(maxh, horizontalCuts[i] - horizontalCuts[i-1])
  for (let i = 1; i < verticalCuts.length; i++)
      maxv = Math.max(maxv, verticalCuts[i] - verticalCuts[i-1])
  
  //we can just return the product of these two numbers, modulo 1e9+7 (1000000007n)
  return BigInt(maxh) * BigInt(maxv) % 1000000007n
};
