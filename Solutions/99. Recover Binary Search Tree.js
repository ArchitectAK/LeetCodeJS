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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
  var node1, node2;
  var prev = new TreeNode(-Number.MAX_VALUE);
  
  const traverse = (node) => {
      if (!node) return;
      
      traverse(node.left);

      if (node.val < prev.val) {
          node2 = node;
          if (!node1) node1 = prev;
      }
      
      prev = node;
  
      traverse(node.right);
  }
  
  traverse(root);
  
  var tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
  
};

