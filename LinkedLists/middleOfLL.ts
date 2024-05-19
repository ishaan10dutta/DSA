function middleNode(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head;

  if (head == null || head.next == null) return head;

  while (fast && fast.next && slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
