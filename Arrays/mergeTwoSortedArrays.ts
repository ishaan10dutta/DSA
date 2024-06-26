//https://leetcode.com/problems/merge-sorted-array/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i=m-1, j=n-1, k=m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]<nums2[j]){
            nums1[k] = nums2[j];
            j--;
            k--;
        }
        else{
            nums1[k] = nums1[i];
            i--;
            k--;
        }
    }
    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    while(i>=0){
        nums1[k] = nums1[i];
        i--;
        k--;
    }
};