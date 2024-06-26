//Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the 
//elements on its right side in the array.
//Example 1:
//Input: arr = [4, 7, 1, 0]
//Output: [7 1 0]  - > Explanation: Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

function arrayLeaders(arr: number[]): number[] {
    let n = arr.length, res: number[] = [];
    let max = arr[n-1];
    res.push(arr[n-1]);
    
    for(let i=n-2;i>=0;i--){
        if(arr[i]>max){
            max=arr[i];
            res.push(arr[i]);
        }
    }
    return res;
}