public class Solution {
    public int MaxProfit(int[] prices) {
        int buy = prices[0];
        int max_profit = 0;
        for (int i = 1; i < prices.Length; i++) {
            int sell = prices[i];
            int profit = sell - buy;
            max_profit = profit > max_profit ? profit : max_profit;
            buy = sell < buy ? sell : buy;
        }
        return max_profit;
    }
}