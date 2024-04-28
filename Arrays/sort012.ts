//https://leetcode.com/problems/sort-colors/

 function sortColors(nums: number[]): void {
    let l=0, mid=0, r=nums.length-1;
    while(mid<=r){
        if(nums[mid]===0){
            [nums[l], nums[mid]] = [nums[mid], nums[l]];
            l++, mid++;
        }
        else if(nums[mid]===1)
            mid++;
        else if(nums[mid]===2){
            [nums[mid], nums[r]] = [nums[r], nums[mid]];
            r--;
        }
    }
};