public class Solution
{
    public string LongestCommonPrefix(string[] strs)
    {
        string result = "";
        string compare = strs[0];
        for (int i = 0; i < compare.Length; i++)
        {
            string letter = compare.Substring(i, 1);
            Console.WriteLine(letter);
            for (int j = 1; j < strs.Length; j++)
            {
                if (!strs[j].Substring(i, 1).Contains(letter))
                {
                    return result;
                }
            }
            result += letter;
        }
        return result;
    }
}