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
 * @param {number} targetSum
 * @return {number[][]}
 */

 var pathSum = function(root, targetSum) {
  const recurseTree = (node, remainingSum, pathNodes = [], pathList = []) => {
      if(!node) return [];
      
      pathNodes.push(node.val);
      
      if(remainingSum == node.val  && node.left == null && node.right ==null)
          pathList.push([...pathNodes])
      else {
          recurseTree(node.left, remainingSum - node.val, pathNodes, pathList)
          recurseTree(node.right, remainingSum - node.val, pathNodes, pathList)
      }
      pathNodes.pop()
      
      return pathList;
  }
  
  return recurseTree(root, targetSum)
  
};