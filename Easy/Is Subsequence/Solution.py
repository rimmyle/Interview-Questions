class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        index = 0
        for char in t:
            index = index + 1 if char == s[index] else index
            if index == len(s) - 1:
                return True
        return False