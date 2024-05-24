//https://www.interviewbit.com/problems/repeat-and-missing-number-array/

function repeatedNumber(arr: number[]): number[] {
  let n = arr.length,
    S1 = 0,
    S2 = 0;
  let Sn = (n * (n + 1)) / 2;
  let S2n = (n * (n + 1) * (2 * n + 1)) / 6;

  for (let i = 0; i < arr.length; i++) {
    S1 += arr[i];
    S2 += arr[i] * arr[i];
  }
  const XminusY = S1 - Sn;
  const X2minusY2 = S2 - S2n;

  const XplusY = X2minusY2 / XminusY;

  const x = Math.floor(XminusY + XplusY) / 2;
  const y = XplusY - x;

  return [x, y];
}
