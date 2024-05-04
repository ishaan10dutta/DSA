//https://leetcode.com/problems/set-matrix-zeroes/description/

function setZeroesOptimal(matrix: number[][]): void {
  let n = matrix.length,
    m = matrix[0].length,
    col1 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        if (j == 0) {
          col1 = 1;
        } else {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (j == 0) {
        if (col1 == 1) 
            matrix[i][j] = 0;
      } 
      
      else {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) 
            matrix[i][j] = 0;
      }
    }
  }
};

function setZeroes(matrix: number[][]): void {
  let n = matrix.length,
    m = matrix[0].length;
  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        if (j !== 0) matrix[0][j] = 0;
        else col0 = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
}
