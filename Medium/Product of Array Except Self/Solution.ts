function productExceptSelfTs(nums: number[]): number[] {
    let result: number[] = [];

    let product: number = 1;
    for (let i: number = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i: number = nums.length - 1; i > -1; i--) {
        result[i] *= product;
        product *= nums[i];
    }
    return result;
};