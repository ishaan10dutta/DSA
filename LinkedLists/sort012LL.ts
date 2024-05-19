function sort012List(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let zeroHead = new ListNode(-Infinity);
  let oneHead = new ListNode(-Infinity);
  let twoHead = new ListNode(-Infinity);
  let zero = zeroHead,
    one = oneHead,
    two = twoHead,
    temp: ListNode | null = head;
  while (temp) {
    if (temp.val === 0) {
      zero.next = temp;
      temp = zero;
    } else if (temp.val === 1) {
      one.next = temp;
      temp = one;
    } else {
      two.next = temp;
      temp = two;
    }
    temp = temp.next;
  }

  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  twoHead.next = null;

  return zeroHead.next;
}
