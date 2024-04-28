//https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let count=0, ele;
    for(let i=0;i<nums.length;i++){
        if(count===0){
            count=1;
            ele=nums[i];
        }
        else if(ele===nums[i]){
            count++;
        }
        else count--;
    }
    let majorityCount = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===ele)
            majorityCount++;
    }
    if(majorityCount>Math.floor(nums.length/2))
        return ele;
    return -1;
};