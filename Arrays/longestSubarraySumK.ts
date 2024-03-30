function getLongestSubarray(a: number[], k: number): number {
  let mpp = new Map();
  let sum,
    maxLen = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    //i+1 as 0 indexed so add to get subarray length
    if (sum === k) maxLen = Math.max(maxLen, i+1);

    let remaining = sum-k;
    
    //maximum subarray length fr existing prefixSum
    if(mpp.has(remaining)){
        let currLen = i - mpp.get(remaining);
        maxLen = Math.max(currLen, maxLen);
    }

    //set if desn't exist
    if(!mpp.has(sum))
        mpp.set(sum, i);

  }
  return maxLen;
}

function getLongestSubarrayTwoPointers(a: number[], k: number): number {
    let left, right, maxLen = 0;
    let sum = a[0];
    while(right<a.length){
        //if sum>k, reduce sum by moving left ahead
        while(left<=right && sum>k){
            sum-=a[left];
            left++;
        }
        if(sum===k){
            maxLen = Math.max(maxLen, right-left+1);
        }
        //if sum lesser still, increase sum by moving forward
        right++;
        if(right<a.length) 
            sum+=a[right];
    }
    return maxLen;
}