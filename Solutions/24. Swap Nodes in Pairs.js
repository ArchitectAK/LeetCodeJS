/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  if(!head || !head.next)
      return head;
  
  let v1 = head
  let v2 = head.next
  let v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
};