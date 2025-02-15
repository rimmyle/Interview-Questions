/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let previous = 'M';
    s.split('').forEach((letter) => {
        const prev = table[previous];
        const current = table[letter];
        if (prev < current) {
            result -= prev * 2;
        }
        result += current;
        previous = letter;
    });
    return result;
};