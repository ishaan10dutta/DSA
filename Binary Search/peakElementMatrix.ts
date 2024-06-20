//https://leetcode.com/problems/find-a-peak-element-ii/description/

function findMaxRow(mat: number[][], m, n, col) {
  let maxVal = -1,
    index = -1;
  for (let i = 0; i < m; i++) {
    if (mat[i][col] > maxVal) {
      maxVal = mat[i][col];
      index = i;
    }
  }
  return index;
}

function findPeakGrid(mat: number[][]): number[] {
  let m = mat.length,
    n = mat[0].length;
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let maxRowIndex = findMaxRow(mat, m, n, mid);
    let left = mid - 1 > 0 ? mat[maxRowIndex][mid - 1] : -1;
    let right = mid + 1 < n ? mat[maxRowIndex][mid + 1] : -1;
    if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right)
      return [maxRowIndex, mid];
    else if (mat[maxRowIndex][mid] < left) high = mid - 1;
    else low = mid + 1;
  }
  return [-1, -1];
}
