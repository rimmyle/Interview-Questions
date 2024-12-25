class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        sorted = intervals.sort()
        start = intervals[0]
        result = []
        for i in range(1, len(intervals)):
            if start[1] >= intervals[i][0]:
                start = [min(start[0], intervals[i][0]), max(intervals[i][1], start[1])]
            else:
                result.append(start)
                start = intervals[i]
  
        result.append(start)
    
        return result
        