int findClosestNumber(int* nums, int numsSize) {
    int result = nums[0];
    for (int i = 1; i < numsSize; i++) {
        int num = nums[i];
        if (abs(num) < abs(result)) {
            result = num;
        } else if (abs(num) == abs(result)) {
            result = num > result ? num : result;
        }
    }
    return result;
}