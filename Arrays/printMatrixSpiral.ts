function printSpiral(mat: number[][]): number[] {
  // Define ans array to store the result.
  let ans: number[] = [];
  // Determine the number of rows and columns
  let n = mat.length; // no. of rows
  let m = mat[0].length; // no. of columns

  // Initialize the pointers reqd for traversal.
  let top = 0,
    left = 0,
    bottom = n - 1,
    right = m - 1;

  // Loop until all elements are not traversed.
  while (top <= bottom && left <= right) {
    // For moving left to right
    for (let i = left; i <= right; i++) ans.push(mat[top][i]);

    top++;

    // For moving top to bottom.
    for (let i = top; i <= bottom; i++) ans.push(mat[i][right]);

    right--;

    // For moving right to left.
    if (top <= bottom) {
      for (let i = right; i >= left; i--) ans.push(mat[bottom][i]);

      bottom--;
    }

    // For moving bottom to top.
    if (left <= right) {
      for (let i = bottom; i >= top; i--) ans.push(mat[i][left]);

      left++;
    }
  }
  return ans;
}
