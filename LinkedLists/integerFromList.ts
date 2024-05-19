//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

function integerFromList(head: ListNode | null): number {
    let num=0;
    while(head){
        num = num*2 + head.val;
        head=head.next;
    }
    return num;
}
