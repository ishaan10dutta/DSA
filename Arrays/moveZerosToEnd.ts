//https://leetcode.com/problems/move-zeroes/description/

function moveZeroes(nums: number[]): void {
    let j=-1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }
    if(j==-1) return;
    for(let i=j+1;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
};