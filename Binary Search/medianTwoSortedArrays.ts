function findMedianSortedArrays(a: number[], b: number[]): number {
    const n1 = a.length, n2 = b.length;
    const n = n1 + n2; 

    const ind2 = Math.floor(n / 2);
    const ind1 = ind2 - 1;
    let cnt = 0;
    let ind1el = -1, ind2el = -1;

    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (a[i] < b[j]) {
            if (cnt === ind1) ind1el = a[i];
            if (cnt === ind2) ind2el = a[i];
            cnt++;
            i++;
        }
        else {
            if (cnt === ind1) ind1el = b[j];
            if (cnt === ind2) ind2el = b[j];
            cnt++;
            j++;
        }
    }

    while (i < n1) {
        if (cnt === ind1) ind1el = a[i];
        if (cnt === ind2) ind2el = a[i];
        cnt++;
        i++;
    }
    while (j < n2) {
        if (cnt === ind1) ind1el = b[j];
        if (cnt === ind2) ind2el = b[j];
        cnt++;
        j++;
    }

    if (n % 2 === 1) {
        return ind2el;
    }

    return (ind1el + ind2el) / 2.0;
};