//https://leetcode.com/problems/merge-two-sorted-lists/description/

function mergeTwoSortedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;

    if(list1.val<list2.val){
        list1 = mergeTwoSortedLists(list1.next, list2);
        return list1;
    }
    else{
        list2 = mergeTwoSortedLists(list1, list2.next);
        return list2;
    }
}
