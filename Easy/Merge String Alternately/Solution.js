/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    const short = word1.length < word2.length ? word1 : word2;
    for (let i = 0; i < short.length; i++) {
        result += word1[i] + word2[i];
    }

    if (word1.length != word2.length) {
        result = word1.length < word2.length ? result + word2.substring(word1.length) : result + word1.substring(word2.length);
    }
    return result;
};