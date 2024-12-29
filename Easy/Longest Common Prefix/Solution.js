/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    const compare = strs[0];
    for (let i = 0; i < compare.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (!compare[i].includes(strs[j][i])) {
                return result;
            }
        }
        result += compare[i];
    }
    return result;
};