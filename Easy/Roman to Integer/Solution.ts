function romanToIntTS(s: string): number {
    const table: Object = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result: number = 0;
    let previous: string = 'M';
    s.split('').forEach((letter) => {
        const prev: number = table[previous];
        const current: number = table[letter];
        if (prev < current) {
            result -= prev * 2;
        }
        result += current;
        previous = letter;
    });
    return result;
};