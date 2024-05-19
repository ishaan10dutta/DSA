//Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.
// Example 1:
// Input: A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with sum 0 will be -2 2 -8 1 7.

function longestSubarraySum0(arr: number[]): number {
  let mpp = new Map(),
    sum = 0,
    maxL = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] == 0 && maxL == 0) maxL = 1;
    if (sum == 0) maxL = i + 1;
    if (mpp.has(sum)) {
      maxL = Math.max(maxL, i - mpp.get(sum));
    } else mpp.set(sum, i);
  }
  return maxL;
}
