var maxRunTime = function(n, batteries) {
    let totalEnergy = 0;
    for (let b of batteries) totalEnergy += b;

    batteries.sort((a, b) => a - b);

    for (let i = batteries.length - 1; i >= 0; i--) {
        if (batteries[i] > Math.floor(totalEnergy / n)) {
            totalEnergy -= batteries[i];
            n--;
        } else break;
    }

    return Math.floor(totalEnergy / n);
};