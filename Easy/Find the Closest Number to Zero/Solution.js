/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0];
    nums.forEach((num) => {
        if (Math.abs(closest) > Math.abs(num)) {
            closest = num;
        } else if (Math.abs(closest) == Math.abs(num)) {
            closest = Math.max(num, closest);
        }
    })
    return closest;
};