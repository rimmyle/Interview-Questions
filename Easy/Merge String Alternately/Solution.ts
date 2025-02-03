function mergeAlternatelyTs(word1: string, word2: string): string {
    let short: string = word1.length < word2.length ? word1 : word2;
    let result: string = '';
    for (let i: number = 0; i < short.length; i++) {
        result += word1[i] + word2[i];
    }

    if (word1.length != word2.length) {
        result = word1.length < word2.length ? result + word2.substring(word1.length) : result + word1.substring(word2.length);
    }
    return result;
};