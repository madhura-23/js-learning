/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const mod = 1e9 + 7;
    const n = complexity.length;
    for (let i = 1; i < n; i++){
        if (complexity[i] <= complexity[0]){
            return 0;
        }
    }
    let res = 1;
    for (let i = 1; i < n; i++){
        res = (res * i) % mod;
    }
    return res;
};