/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  const isBST = (node, min, max) => {
      if (!node) return true
      if (node.val <= min || node.val >= max) return false
      return isBST(node.left, min, node.val) && isBST(node.right, node.val, max)
  }
  return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};