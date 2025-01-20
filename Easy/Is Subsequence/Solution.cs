public class Solution
{
    public bool IsSubsequence(string s, string t)
    {
        int index = 0;
        foreach (char letter in t)
        {
            index = letter == Convert.ToChar(s.Substring(index, 1)) ? index + 1 : index;

            if (index == s.Length - 1)
            {
                return true;
            }
        }
        return false;
    }
}