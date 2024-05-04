function subarraySum(arr: number[], k: number): number {
    let mpp = new Map(), count = 0, preSum = 0;
    mpp.set(0, 1);

    for(let i=0;i<arr.length;i++){
        preSum+=arr[i];

        let remaining = preSum - k;

        if(mpp.has(remaining)){
            count+=mpp.get(remaining);
        }

        if(mpp.has(preSum))
            mpp.set(preSum, mpp.get(preSum)+1);
        else mpp.set(preSum, 1)
    }

    return count;
}