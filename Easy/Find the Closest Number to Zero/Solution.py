class Solution(object):
    def findClosestNumber(self, nums):
        closest = nums[0]
        for num in nums:
            if abs(closest) > abs(num):
                closest = num
            elif abs(closest) == abs(num):
                closest = max(num, closest)
        return closest
        