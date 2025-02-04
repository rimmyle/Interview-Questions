public class Solution
{
    public int RomanToInt(string s)
    {
        Dictionary<String, int> table = new Dictionary<String, int>();
        table.Add("I", 1);
        table.Add("V", 5);
        table.Add("X", 10);
        table.Add("L", 50);
        table.Add("C", 100);
        table.Add("D", 500);
        table.Add("M", 1000);

        string previous = "M";
        int result = 0;
        for (int i = 0; i < s.Length; i++)
        {
            int prev = table[previous];
            int current = table[s.Substring(i, 1)];
            if (prev < current)
            {
                result -= prev * 2;
            }
            result += current;
            previous = s.Substring(i, 1);
        }
        return result;
    }
}