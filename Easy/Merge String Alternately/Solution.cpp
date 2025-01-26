#include <iostream>
using namespace std;

class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string result = "";
        int len1 = word1.length();
        int len2 = word2.length();
        int max = fmax(len1, len2);
        for (int i = 0; i < max; i++) {
            if (i < len1) {
                result += word1[i];
            }
            if (i < len2) {
                result += word2[i];
            }
        }
        return result;
    }
};