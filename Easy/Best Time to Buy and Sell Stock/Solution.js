/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let max_profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const sell = prices[i];
        const profit = sell - buy;
        buy = sell < buy ? sell : buy;
        max_profit = profit > max_profit ? profit : max_profit;
    }
    return max_profit;
};