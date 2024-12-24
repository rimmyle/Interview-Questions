class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        result = ''
        compare = strs[0]
        for index in range(len(compare)):
            for word in strs[1:]:
                if word[index] != compare[index]:
                    return result
            result += compare[index]

        return result