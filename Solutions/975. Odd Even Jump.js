/**
 * @param {number[]} arr
 * @return {number}
 */
 var oddEvenJumps = function(arr) {
  let result = 0;
  const arrLength = arr.length;
  const memory = new Map(); // { key: index, value: TreeNode }
  
  class TreeNode {
     constructor(value) {
       this.leftLeadsToEdge = false;
       this.rightLeadsToEdge = false;
     }
   }
  
  const root = new TreeNode(arr[arrLength - 1]);
  root.leftLeadsToEdge = true;
  root.rightLeadsToEdge = true;
  
  memory.set(arrLength - 1, root);
  
  const jumpMap = (key) => {
      const value = arr[key];
      let oddJumpKey = null, evenJumpKey = null,
          oddJumpValue = Infinity, evenJumpValue = -Infinity,
          leftLeadsToEdge = false, rightLeadsToEdge = false;
      
      if (key == arrLength - 1) {
          result++;
          return;
      }
      else if (key > arrLength - 1) {
          return;
      }
      
      for (let i = key+1; i < arrLength; i++) {
          if (arr[i] >= value && arr[i] < oddJumpValue) {
              oddJumpKey = i
              oddJumpValue = arr[i]
              leftLeadsToEdge = memory.get(oddJumpKey).rightLeadsToEdge;
          }
          
          if (arr[i] <= value && arr[i] > evenJumpValue) {
              evenJumpKey = i
              evenJumpValue = arr[i]
              rightLeadsToEdge = memory.get(evenJumpKey).leftLeadsToEdge;
          }
      }
      
      if (leftLeadsToEdge) {
          result++;
      }
      
      const node = new TreeNode(value);
      node.leftLeadsToEdge = leftLeadsToEdge;
      node.rightLeadsToEdge = rightLeadsToEdge;

      memory.set(key, node);
  }
  
  for (let i = arrLength - 1; i >= 0; i--) {
      jumpMap(i);
  }
  
  return result
  
};