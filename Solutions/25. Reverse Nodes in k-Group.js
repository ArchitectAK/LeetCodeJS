/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  let curr = head;
  let count = 0;
  
  while (curr != null && count != k) { // find the k+1 node
      curr = curr.next;
      count++;
  }
  if (count == k) { // if k+1 node is found
      curr = reverseKGroup(curr, k); // reverse list with k+1 node as head
      // head - head-pointer to direct part, 
      // curr - head-pointer to reversed part;
      while (count-- > 0) { // reverse current k-group: 
          let tmp = head.next; // tmp - next head in direct part
          head.next = curr; // preappending "direct" head to the reversed list 
          curr = head; // move head of reversed part to a new node
          head = tmp; // move "direct" head to the next node in direct part
      }
      head = curr;
  }
  return head;
};