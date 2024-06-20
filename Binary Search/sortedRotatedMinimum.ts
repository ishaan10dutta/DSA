//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(arr: number[]): number {
    let res = Infinity, low = 0, high = arr.length - 1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[low]<=arr[mid]){
            res = Math.min(res, arr[low]);
            low = mid+1;
        }
        else{
            res = Math.min(arr[mid], res);
            high = mid-1;
        }
    }
    return res;
};