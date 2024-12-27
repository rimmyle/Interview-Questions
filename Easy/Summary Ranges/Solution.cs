import System.Collections.*;
public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        int start = nums[0];
        int end = nums[0];
        IList<string> result = new List<string>();
        for (int i = 1; i < nums.Length; i++) {
            int num = nums[i];
            if (num != end + 1) {
                string input = start == end ? start + "" : start + "->" + end;
                result.Add(input);
                start = num;
            }
            end = num;
            if (i == nums.Length - 1) {
                string input = start == end ? start + "" : start + "->" + end;
                result.Add(input);
            }
        }
        return result;
    }
}