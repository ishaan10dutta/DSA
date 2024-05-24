//https://leetcode.com/problems/trapping-rain-water/

function trap(arr: number[]): number {
    let left = 0, right = arr.length - 1, res = 0;
    let leftMax = 0, rightMax = 0;
    while(left<=right){
        if(arr[left]<arr[right]){
            if(arr[left]>leftMax){
                leftMax = arr[left];
            }
            else res+=leftMax-arr[left];
            left++;
        }
        else{
            if(arr[right]>rightMax){
                rightMax = arr[right];
            }
            else res+=rightMax-arr[right];
            right--;
        }
    }
    return res;
};