import java.util.*;
class Solution {
    public List<String> summaryRanges(int[] nums) {
        int start = nums[0];
        int end = nums[0];
        ArrayList<String> result = new ArrayList<String>();
        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];
            if (num != end + 1) {
                String input = start == end ? start + "" : start + "->" + end;
                result.add(input);
                start = num;
            }
            end = num;
            if (i == nums.length - 1) {
                String input = start == end ? start + "" : start + "->" + end;
                result.add(input);
            }
        }
        return result;
    }
}