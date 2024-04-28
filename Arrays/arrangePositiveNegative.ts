//https://leetcode.com/problems/rearrange-array-elements-by-sign/

function rearrangeArray(nums: number[]): number[] {
    let ans = new Array(nums.length).fill(0);
    let posIndex=0, negIndex=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            ans[negIndex] = nums[i];
            negIndex+=2;
        }
        else if(nums[i]>0){
            ans[posIndex] = nums[i];
            posIndex+=2;
        }
    }
    return ans;
};