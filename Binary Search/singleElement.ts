//https://leetcode.com/problems/single-element-in-a-sorted-array/description/

function singleNonDuplicate(arr: number[]): number {
  let n = arr.length;
  let low = 1,
    high = n - 2;
  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];
    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    )
      low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
