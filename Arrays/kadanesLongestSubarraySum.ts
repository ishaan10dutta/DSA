//https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxi) {
      maxi = sum;
    }
    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
    }
  }
  // To consider the sum of the empty subarray
  // if (maxi < 0) maxi = 0;

  return maxi;
}

//Follow-up - Print the longest sum subarray
function printMaxSubArray(nums: number[]): number {
  let maxi = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let start = 0,
    ansStart = -1,
    end = -1;
  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) start = 0;

    sum += nums[i];

    if (sum > maxi) {
      maxi = sum;
      ansStart = start;
      end = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}
