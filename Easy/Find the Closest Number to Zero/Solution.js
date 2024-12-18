/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let result = nums[0];
    let absolute = Math.abs(result);
    nums.forEach((num) => {
        const number = Math.abs(num);
        if (absolute > number) {
            result = num;
            absolute = number;
        } else if (absolute == number) {
            if (num > result) {
                result = num;
                absolute = number;
            }
        }
    })
    return result;
};