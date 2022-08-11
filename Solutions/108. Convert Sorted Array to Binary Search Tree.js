/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  function convert(i,j){
      if (j<i) return null
      const rooti = Math.floor((i+j)/2)
      const root = new TreeNode(nums[rooti])
      root.left = convert(i,rooti-1)
      root.right = convert ( rooti+1,j)
      return root
  }
  return convert(0,nums.length-1)
};