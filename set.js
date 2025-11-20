/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    intervals.sort((A, B) => {
        if (A[1] !== B[1]) return A[1] - B[1];
        return B[0] - A[0];
    });
    
    let a = -1e18, b = -1e18;
    let ans = 0;
    for (const iv of intervals) {
        const l = iv[0], r = iv[1];
        if (l > b) {
            ans += 2;
            a = r - 1;
            b = r;
        } else if (l > a) {
            ans += 1;
            a = b;
            b = r;
        } else {}
    }
    return ans;
};