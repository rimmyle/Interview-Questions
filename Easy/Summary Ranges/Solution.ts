function summaryRangesTs(nums: number[]): string[] {
    if (nums.length == 0) {
        return [];
    }
    let start: number = nums[0];
    let end: number = nums[0];
    let result: string[] = [];
    for (let i: number = 1; i < nums.length; i++) {
        const num: number = nums[i];
        if (num != end + 1) {
            const input: string = start == end ? start + "" : start + "->" + end;
            result.push(input);
            start = num;
        }
        end = num;
    }

    const input: string = start == end ? start + "" : start + "->" + end;
    result.push(input);

    return result;
};