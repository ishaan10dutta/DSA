//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

function removeDuplicates(nums: number[]): number {
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};