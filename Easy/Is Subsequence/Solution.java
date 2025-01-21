class Solution {
    public boolean isSubsequence(String s, String t) {
        int index = 0;
        for (String letter: t.split("")) {
            index = letter.contains(s.substring(index, index + 1)) ? index + 1 : index;
            if (index == s.length() - 1) {
                return true;
            }
        }
        return false;
    }
}