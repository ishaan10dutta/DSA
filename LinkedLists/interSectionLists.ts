//https://leetcode.com/problems/intersection-of-two-linked-lists/

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {

  if (!headA || !headB) return null;
  let tempA: ListNode | null = headA,
    tempB: ListNode | null = headB;
    
  while ((tempA || tempB) && tempA !== tempB) {
    tempA = tempA === null ? headB : tempA.next;
    tempB = tempB === null ? headA : tempB.next;
  }
  return tempA;
}
