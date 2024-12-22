class Solution {
    public int maxProfit(int[] prices) {
        int buy = prices[0];
        int max_profit = 0;
        for (int i = 1; i < prices.length; i++) {
            int sell = prices[i];
            int profit = sell - buy;
            buy = sell < buy ? sell : buy;
            max_profit = profit > max_profit ? profit : max_profit;

        }
        return max_profit;
    }
}