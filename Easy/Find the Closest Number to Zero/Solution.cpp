#include <iostream>
#include <vector>
using std::vector;
using std:: max;

class Solution {
public:
    int findClosestNumber(vector<int>& nums) {
        int result = nums[0];
        for (int num : nums) {
            if (abs(num) < abs(result)) {
                result = num;
            } else if (abs(num) == abs(result)) {
                result = max(num, result);
            }
        }
        return result;
    }
};
