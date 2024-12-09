public class Solution
{
    public int FindClosestNumber(int[] nums)
    {
        int num = nums[0];
        for (int i = 0; i < nums.Length; i++)
        {
            if (Math.Abs(num) > Math.Abs(nums[i]))
            {
                num = nums[i];
            }
            else if (Math.Abs(num) == Math.Abs(nums[i]))
            {
                num = Math.Max(num, nums[i]);
            }
        }
        return num;
    }
}