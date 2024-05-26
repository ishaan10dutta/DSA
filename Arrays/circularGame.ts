//https://leetcode.com/problems/find-the-winner-of-the-circular-game/

function findTheWinnerHelper(n: number, k: number): number {
    if(n===1) return 0;
    return (findTheWinnerHelper(n-1, k) + k) % n;
};

function findTheWinnerIterative(n: number, k: number) : number {
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = (ans + k) % i;
    }
    return ans;
}

function findTheWinner(n: number, k: number): number {
    return findTheWinnerIterative(n, k) + 1;
}