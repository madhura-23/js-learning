/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const MOD = 1_000_000_007n;

    const left = new Map();
    const right = new Map();

    for (const x of nums) {
        right.set(x, (right.get(x) || 0n) + 1n);
    }

    let ans = 0n;

    for (const x of nums) {
        right.set(x, right.get(x) - 1n);

        const need = BigInt(x * 2);
        const lc = left.get(Number(need)) || 0n;
        const rc = right.get(Number(need)) || 0n;

        ans = (ans + lc * rc) % MOD;

        left.set(x, (left.get(x) || 0n) + 1n);
    }

    return Number(ans);
};