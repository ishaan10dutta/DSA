function getMid(node:ListNode) {
    let slow:ListNode = node;
    let fast:ListNode = node.next;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function merge(l1:ListNode,l2:ListNode){

    let tail = new ListNode();
    let dummy = tail; 

    while(l1 && l2){

        if(l1.val < l2.val){
            tail.next = l1;
            l1 = l1.next;
        }else{
            tail.next = l2;
            l2 = l2.next;

        }

        tail = tail.next;

    }

    if(l1){
        tail.next = l1;
    }
    if(l2){
        tail.next = l2;
    }

    return dummy.next;

}

function sortList(head: ListNode | null): ListNode | null {

    if(!head || !head.next ){
        return head;
    }
    let left = head;
    let right = getMid(head);

    let temp = right.next;
    right.next = null;
    right = temp;

    let l1 = sortList(left);
    let l2 = sortList(right);

    return merge(l1,l2);
};