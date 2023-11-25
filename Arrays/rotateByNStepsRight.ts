//https://leetcode.com/problems/rotate-array/description/

/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    let end = nums.length-1;
    reverseArr(nums, 0, end)
    reverseArr(nums, 0, k-1);
    reverseArr(nums, k, end);
};

function reverseArr(nums: number[], l:number, r:number):number[] {
    while(l<r){
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    return nums;
}