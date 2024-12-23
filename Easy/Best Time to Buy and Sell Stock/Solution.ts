function maxProfitTs(prices: number[]): number {
    let buy: number = prices[0];
    let max_profit: number = 0;
    for (let i = 1; i < prices.length; i++) {
        const sell: number = prices[i];
        const profit: number = sell - buy;
        buy = sell < buy ? sell : buy;
        max_profit = profit > max_profit ? profit : max_profit;
    }
    return max_profit;
};