/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arsiv = new Map();

    for (const words of strs) {
        let imza = words.split('').sort().join('')

        if (!arsiv.has(imza)) {
            arsiv.set(imza, []);
        }
        arsiv.get(imza).push(words);
    }
    return Array.from(arsiv.values());
};