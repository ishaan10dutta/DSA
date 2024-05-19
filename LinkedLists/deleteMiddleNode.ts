//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null;
    let slow: ListNode=head, fast = head.next.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
};