//https://leetcode.com/problems/reverse-linked-list/

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null,
    temp = head;
  while (temp != null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

function reverseLLRecursive(head: ListNode | null): ListNode | null {
    if(head===null || head.next===null)
        return head;
    let newHead = reverseLLRecursive(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
}
