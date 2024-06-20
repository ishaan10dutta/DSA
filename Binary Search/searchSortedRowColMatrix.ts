//https://leetcode.com/problems/search-a-2d-matrix-ii/

function searchMatrixSorted(mat: number[][], target: number): boolean {
    const m = mat.length, n = mat[0].length;
    let rows = 0, cols = n-1;
    while(rows<m && cols>=0){
        if(mat[rows][cols] === target)
            return true;
        else if(mat[rows][cols]<target)
            rows++;
        else cols--;
    } 
    return false;
};