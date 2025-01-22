/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0;
    let result = false
    t.split("").forEach((letter) => {
        index = letter == s[index] ? index + 1 : index;
        if (index + 1 == s.length) {
            result = true;
        }
    });
    return result;
};