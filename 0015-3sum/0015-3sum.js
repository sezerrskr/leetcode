/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let n = nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < n.length - 2; i++) {
        if (i > 0 && n[i] === n[i - 1]) continue;
        let L = i + 1;
        let R = n.length - 1;
        while (L < R) {
            let sum = n[i] + n[L] + n[R];

            if (sum == 0) {
                result.push([n[i], n[L], n[R]]);
                while (L < R && n[L] === n[L + 1]) L++;
                while (L < R && n[R] === n[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++
            } else {
                R--
            }
        }
    }
    return result;
};