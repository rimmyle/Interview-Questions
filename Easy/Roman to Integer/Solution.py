class Solution:
    def romanToInt(self, s: str) -> int:
        table = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        prev = 'M'
        number = 0

        for i in range(len(s)):
            if table[prev] < table[s[i]]:
                number -= table[prev] * 2
            number += table[s[i]]
            prev = s[i]
        
        return number
        