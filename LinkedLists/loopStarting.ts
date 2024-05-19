//https://leetcode.com/problems/linked-list-cycle-ii/

function loopStarting(head: ListNode | null): ListNode | null {
    let slow = head, fast = head;
    while(slow && fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow && fast && slow!==fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};