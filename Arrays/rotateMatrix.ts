//https://leetcode.com/problems/rotate-image/

function rotateClockwise(matrix: number[][]): void {
  let m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i].reverse();
  }
}

function rotateAntiClockwise(matrix: number[][]): void {
  let m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < m; i++) {
    matrix.reverse();
  }
}
