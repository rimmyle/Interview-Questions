class Solution {
    public int findClosestNumber(int[] nums) {
        int result = nums[0];
        for (int num: nums) {
            if (Math.abs(result) > Math.abs(num)) {
                result = num;
            } else if (Math.abs(result) == Math.abs(num)) {
                result = Math.max(result, num);
            }
        }
        return result;
    }
}