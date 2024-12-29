class Solution {
    public String longestCommonPrefix(String[] strs) {
        String compare = strs[0];
        String result = "";
        for (int i = 0; i < compare.length(); i++) {
            String letter = compare.substring(i, i + 1);
            for (int j = 1; j < strs.length; j++) {
                if (!strs[j].substring(i, i + 1).contains(letter)) {
                    return result;
                }
            }
            result += letter;
        }
        return result;
    }
}