//https://leetcode.com/problems/palindrome-linked-list/description/

function reverseLL(head: ListNode | null): ListNode | null {
  let temp = head;
  let prev: ListNode | null = null;
  while (temp && prev) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true;
  let slow: ListNode | null = head,
    fast = head;
  while (slow && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newHead = reverseLL(slow && slow.next);
  let first: ListNode | null = head,
    second = newHead;
  while (second !== null) {
    if (first && first.val !== second.val) {
      reverseLL(newHead);
      return false;
    }
    first = first && first.next;
    second = second.next;
  }
  reverseLL(newHead);
  return true;
}
