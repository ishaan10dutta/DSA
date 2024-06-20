//https://leetcode.com/problems/search-a-2d-matrix/

function binarySearch(arr: number[], target: number){
    let low = 0, high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===target) return true;
        else if(target<arr[mid]) high = mid-1;
        else low = mid+1;
    }
    return false;
}

function searchMatrix(mat: number[][], target: number): boolean {
    const m = mat.length, n = mat[0].length;
    for(let i=0;i<m;i++){
        if(mat[i][0] <= target && target<=mat[i][n-1])
            return binarySearch(mat[i], target)
    }
    return false;
};