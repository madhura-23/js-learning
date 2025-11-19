var findFinalValue = function(nums, original) {
    const cnt = new Array(1001).fill(0);
    
    for (const x of nums) {
        cnt[x]++;
    }
    
    while (original <= 1000 && cnt[original] > 0) {
        original *= 2;
    }
    return original;
};