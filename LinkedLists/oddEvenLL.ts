//https://leetcode.com/problems/odd-even-linked-list/description/

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let odd = head,
    even: ListNode | null = head.next;
  let oddHead = odd,
    evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  if (even) {
    even.next = null;
  }
  return oddHead;
}
//Input: head = [1,2,3,4,5]
//Output: [1,3,5,2,4]
