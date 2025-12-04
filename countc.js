/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let n = directions.length;
    let left = 0, right = n - 1;
    let cnt = 0;
    while (left < n && directions[left] == 'L'){
        left++;
    }
    while (right >= 0 && directions[right] == 'R'){
        right--;
    }
    if (left > right){
        return 0;
    }
    for (let i = left; i <= right; i++){
        if (directions[i] != 'S'){
            cnt += 1;
        }
    }
    return cnt;
};