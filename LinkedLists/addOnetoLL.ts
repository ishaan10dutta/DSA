function addHelper(node: ListNode | null) {
  if (node === null) return 1;
  let carry = addHelper(node.next);
  node.val += carry;
  if (node.val < 10) {
    return 0;
  }
  node.val = 0;
  return 1;
}

function addOne(head: ListNode | null) {
  let carry = addHelper(head);
  if (carry === 1) {
    let newHead = new ListNode(1);
    newHead.next = head;
    head = newHead;
  }
  return head;
}
