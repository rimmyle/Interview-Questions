class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        result = []
        start = nums[0]
        end = nums[0]
        for i in range(1, len(nums)):
            num = nums[i]
            if num != end + 1:
                input = str(start) if start == end else str(start) + '->' + str(end)
                result.append(input)
                start = num
            end = num
            if i == len(nums) - 1:
                input = str(start) if start == end else str(start) + '->' + str(end)
                result.append(input)
           
        return result