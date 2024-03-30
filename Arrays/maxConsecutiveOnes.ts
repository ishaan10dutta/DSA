//https://leetcode.com/problems/max-consecutive-ones/description/

function findMaxConsecutiveOnes(nums: number[]): number {
    let len = nums.length;
    if(len===1 && nums[0]===1) return 1;

    let count=0, max=0;
    for(let i=0; i<len; i++){
        if(nums[i]===1){
            count++
        }
        else count=0;
        max = maximum(count, max);
    }
    return max;
};

function maximum(a: number, b: number): number {
    if(a>b) return a;
    else return b;
}