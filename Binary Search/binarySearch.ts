function searchIterative(arr: number[], target: number): number {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) return mid;
    if (target < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

function binarySearch(
  arr: number[],
  low: number,
  high: number,
  target: number
) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, low, mid - 1, target);
  return binarySearch(arr, mid + 1, high, target);
}

function searchRecursive(arr: number[], target: number): number {
  return binarySearch(arr, 0, arr.length - 1, target);
}
