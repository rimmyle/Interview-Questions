import java.util.HashMap;
class Solution {
    public int romanToInt(String s) {
        HashMap<String, Integer> table = new HashMap<String, Integer>() {{
            put("I", 1);
            put("V", 5);
            put("X", 10);
            put("L", 50);
            put("C", 100);
            put("D", 500);
            put("M", 1000);
        }};
        
        String previous = "M";
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            int prev = table.get(previous);
            int current = table.get(s.substring(i, i + 1));
            if (prev < current) {
                result -= prev * 2;
            }
            result += current;
            previous = s.substring(i, i + 1);
        }
        return result;
    }
}