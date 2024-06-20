//https://leetcode.com/problems/largest-rectangle-in-histogram/

function largestRectangleArea(heights: number[]): number {
    let n = heights.length;
    let st: number[] = [];
    let leftSmall = new Array(n).fill(0);
    let rightSmall = new Array(n).fill(n - 1);

    for (let i = 0; i < n; i++) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        if (st.length === 0) {
            leftSmall[i] = 0;
        } else {
            leftSmall[i] = st[st.length - 1] + 1;
        }
        st.push(i);
    }

    st = [];

    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        if (st.length === 0) {
            rightSmall[i] = n - 1;
        } else {
            rightSmall[i] = st[st.length - 1] - 1;
        }
        st.push(i);
    }

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, heights[i] * (rightSmall[i] - leftSmall[i] + 1));
    }

    return maxArea;
}
