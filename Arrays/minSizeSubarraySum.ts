//https://leetcode.com/problems/minimum-size-subarray-sum/

function minSubArrayLen(target: number, nums: number[]): number {
    let currSum = 0, left = 0, right = 0, res = Infinity;
    for(right=0;right< nums.length; right++){
        currSum+=nums[right];
        while(currSum>=target){
            res = Math.min(res, right-left+1);
            currSum -= nums[left];
            left++;
        }
    }
    return res === Infinity ? 0 : res;
};