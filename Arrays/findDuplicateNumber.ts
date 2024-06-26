//https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicate(nums: number[]): number {
    let slow = nums[0], fast = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow!==fast)
    fast = nums[0];
    while(slow!==fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};