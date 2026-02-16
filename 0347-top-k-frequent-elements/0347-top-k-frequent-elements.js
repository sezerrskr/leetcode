/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const liste = Array.from(map);
    liste.sort((a, b) => b[1] - a[1]);
    return liste.slice(0, k).map(item => item[0]);
};