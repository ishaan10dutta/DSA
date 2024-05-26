//https://leetcode.com/problems/count-number-of-teams/description/

function numTeams(arr: number[]): number {
    let count = 0, res=0, n=arr.length;
    if(n<3) return 0;
    for(let i = 1; i<=n; i++){
        let preLarger = 0, preSmaller = 0, postLarger = 0, postSmaller = 0;
        for(let j = 0; j < i; j++){
            if(arr[j] < arr[i]) preSmaller++;
            else if(arr[j] > arr[i]) preLarger++;
        }
        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[i]) postLarger++;
            else if(arr[j]<arr[i]) postSmaller++;
        }
        res+=preSmaller*postLarger+postSmaller*preLarger;
    }
    return res;
};