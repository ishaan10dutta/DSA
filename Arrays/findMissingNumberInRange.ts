//https://leetcode.com/problems/missing-number/description/

function missingNumber(nums: number[]): number {
    let len = nums.length;
    let sumAll = len*(len+1)/2;
    let sumExcl = 0;
    for(let i=0;i<len;i++){
        sumExcl+=nums[i];
    }
    return sumAll-sumExcl;
};

function missingNumberXOR(nums: number[]): number {
    let len = nums.length;
    let xorAll = 0;
    let xorExcl = 0;
    for(let i=0;i<len-1;i++){
        xorExcl^=nums[i]; //all numbers in array
        xorAll^=(i+1); //all numbers in range
    }
    xorAll^=len; 
    return xorAll^xorExcl;
};
