var judgeCircle = function(moves) {
    let c1 = 0; // horizontal
    let c2 = 0; // vertical

    for (let ch of moves) {
        if (ch === 'L') c1++;
        else if (ch === 'R') c1--;
        else if (ch === 'U') c2++;
        else if (ch === 'D') c2--;
    }

    return c1 === 0 && c2 === 0;
};
