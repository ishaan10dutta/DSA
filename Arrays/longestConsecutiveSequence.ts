//https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
    let n = nums.length, longest = 1, set = new Set<number>();
    if(n===0)
        return 0;
    for(let i=0;i<n;i++)
        set.add(nums[i]);
    
    for(let ele of set){
        if(!set.has(ele-1)){
            let count = 1;
            let curr = ele;
            while(set.has(curr + 1)){
                curr = curr + 1;
                count = count+1
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};