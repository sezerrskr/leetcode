/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let h = height;
    let L = 0;
    let R = h.length - 1;
    let max = 0;
    while (L < R) {
        let currentArea = Math.min(h[L], h[R]) * (R - L);
        max = Math.max(max, currentArea);

        if (h[L] < h[R]) {
            L++;
        } else {
            R--;
        }
    }
    return max;
};