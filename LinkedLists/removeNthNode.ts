//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return head;
    let res = new ListNode(0,head), dummy = res;
    for(let i=0;i<n;i++)
        head = head.next;
    while(head){
        head = head.next;
        dummy = dummy.next;
    }
    dummy.next = dummy.next.next;
    return res.next;
};