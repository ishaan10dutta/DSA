//https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  let mpp = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const rem = target - curr;
    if (mpp.has(rem)) {
      return [mpp.get(rem), i];
    }
    mpp.set(nums[i], i);
  }
  return [-1, -1];
}

//Two-pointers (sorted)
function twoSumTwoPointers(nums: number[], target: number): number[] {
  let l = 0,
    r = nums.length - 1,
    sum = 0;
  while (l < r) {
    sum += nums[l] + nums[r];
    if (sum === target) return [l, r];
    else if (sum < target) l++;
    else r++;
  }
  return [-1, -1];
}
