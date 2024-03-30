//https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let xorAll = 0;
    for(let i=0;i<nums.length;i++){
        xorAll^=nums[i];
    }
    return xorAll;
};