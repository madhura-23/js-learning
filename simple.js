var countOdds = function(low, high) {
    return Math.floor((high - low + 1 + (low % 2)) / 2);
};