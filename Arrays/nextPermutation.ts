//https://leetcode.com/problems/next-permutation/description/

 function nextPermutation(nums: number[]): void {
    let index = -1, n=nums.length;
    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index=i;
            break;
        }
    }
    if(index===-1){
        nums.reverse();
        return;
    }
    for(let i=n-1;i>index;i--){
        if(nums[i]>nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    //begin -> end, length of array to reverse
    nums.splice(index+1, n-index-1, ...nums.slice(index+1).reverse());
};