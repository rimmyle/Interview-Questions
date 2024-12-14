function findClosestNumbesTs(nums: number[]): number {
    let closest: number = nums[0];
    nums.forEach((num) => {
        if (Math.abs(closest) > Math.abs(num)) {
            closest = num;
        } else if (Math.abs(closest) == Math.abs(num)) {
            closest = Math.max(closest, num);
        }
    })
    return closest;
};