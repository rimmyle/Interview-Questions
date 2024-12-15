function findClosestNumberTs(nums: number[]): number {
    let result: number = nums[0];
    let absolute: number = Math.abs(result);
    nums.forEach((num) => {
        const number = Math.abs(num);
        if (absolute > number) {
            result = num;
            absolute = number;
        } else if (absolute == number && num > result) {
            result = num;
            absolute = number;
        }
    })
    return result;
};