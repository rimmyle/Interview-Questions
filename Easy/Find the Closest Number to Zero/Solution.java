class Solution {
    public int findClosestNumber(int[] nums) {
        int num = nums[0];
        for (int i = 0; i < nums.length; i++) {
            if (Math.abs(num) > Math.abs(nums[i])) {
                num = nums[i];
            } else if (Math.abs(num) == Math.abs(nums[i])) {
                num = Math.max(num, nums[i]);
            }
        }
        return num;
    }
}