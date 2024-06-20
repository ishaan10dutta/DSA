//https://leetcode.com/problems/next-greater-element-i/description/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const st: (number)[] = [];
    const map = new Map<number, number>();
    const res: number[] = nums1;

    for(let num of nums2){
        while(st.length && st[st.length - 1]<num){
            map.set(st.pop(), num);
        }
        st.push(num);
    }    
    for(let i=0;i<nums1.length;i++)
        res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    
    return res;
};

//In same array
function nextGreaterElements(arr: number[]): number[] {
    let st: number[] = [], n = arr.length, nge: number[] = new Array(arr.length).fill(-1);
    for(let i=2*n - 1;i>=0;i--){
        while(st.length && st[st.length - 1] <= arr[i%n])
            st.pop();
        if(i<n){
            if(st.length)
                nge[i] = st[st.length - 1];
        }
        st.push(arr[i%n])
    }
    return nge;
};