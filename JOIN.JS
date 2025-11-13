/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const merged = {};

    for (const obj of arr1) {
        merged[obj.id] = obj;
    }

    for (const obj of arr2) {
        if (merged[obj.id]) {
            merged[obj.id] = {...merged[obj.id], ...obj};
        } else {
            merged[obj.id] = obj;
        }
    }

    return Object.values(merged).sort((a, b) => a.id - b.id);
};