function isSubsequenceTs(s: string, t: string): boolean {
    let index: number  = 0;
    let result: boolean = false;
    t.split("").forEach((letter) => {
        index = letter == s[index] ? index + 1 : index;
        if (index + 1 == s.length) {
            result = true;
        }
    })
    return result;
};