class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        buy = prices[0]
        max_profit = 0
        for sell in prices[1:]:
            profit = sell - buy
            if profit < 0:
                buy = sell
            if profit > max_profit:
                max_profit = profit
        
        return max_profit