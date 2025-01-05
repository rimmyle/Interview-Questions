function longestCommonPrefixTs(strs: string[]): string {
    let result: string = "";
    const compare: string = strs[0];
    for (let i: number = 0; i < compare.length; i++) {
        for (let j: number = 1; j < strs.length; j++) {
            if (!strs[j][i].includes(compare[i])) {
                return result;
            }
        }
        result += compare[i];
    }
    return result;
};