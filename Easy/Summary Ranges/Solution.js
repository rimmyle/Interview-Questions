/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0];
    let end = nums[0];
    let result = [];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num != end + 1) {
            const input = start == end ? start + "" : start + "->" + end;
            result.push(input);
            start = num;
        }
        end = num;
        if (i == nums.length - 1) {
            const input = start == end ? start + "" : start + "->" + end;
            result.push(input);
        }
    }
    return result;
};