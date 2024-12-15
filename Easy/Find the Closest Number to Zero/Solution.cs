public class Solution
{
    public int FindClosestNumber(int[] nums)
    {
        int result = nums[0];
        int absolute = Math.Abs(result);
        foreach (int num in nums)
        {
            int number = Math.Abs(num);
            if (absolute > number)
            {
                result = num;
                absolute = number;
            }
            else if (absolute == number && num > result)
            {
                result = num;
                absolute = number;
            }
        }
        return result;
    }
}
