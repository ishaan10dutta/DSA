//https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/submissions/1106375297/

function check(nums: number[]): boolean {
    let isRotated = false;
    const last = nums.length-1;
    for(let i=1;i<=last;i++){
        if(nums[i]<nums[i-1]){
            if(!isRotated)
                isRotated=true
            else return false;
        }
    }
    return !isRotated || nums[last]<=nums[0];
};