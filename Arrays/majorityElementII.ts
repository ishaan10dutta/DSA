//https://leetcode.com/problems/majority-element-ii/

function majorityElement(nums: number[]): number[] {
  let count1 = 0,
    count2 = 0,
    ele1 = -Infinity,
    ele2 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (count1 == 0 && nums[i] != ele2) {
      count1++;
      ele1 = nums[i];
    } else if (count2 == 0 && nums[i] != ele1) {
      count2++;
      ele2 = nums[i];
    } else if (nums[i] == ele1) count1++;
    else if (nums[i] == ele2) count2++;
    else {
      count1--;
      count2--;
    }
  }
  let ans: number[] = [];
  (count1 = 0), (count2 = 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == ele1) count1++;
    if (nums[i] == ele2) count2++;
  }
  let minimum = Math.floor(nums.length / 3) + 1;
  if (count1 >= minimum) ans.push(ele1);
  if (count2 >= minimum) ans.push(ele2);
  return ans;
}
