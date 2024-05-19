function countSubarraysWithXorK(arr: number[], k: number): number {
  const n = arr.length;
  let preXor = 0;
  const mpp = new Map();
  mpp.set(preXor, 1);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    preXor ^= arr[i];
    let x = preXor ^ k;

    count += mpp.get(x) || 0;
    mpp.set(preXor, (mpp.get(preXor) || 0) + 1);
  }
  return count;
}
