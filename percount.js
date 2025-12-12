const offline = new Uint32Array(100);
const users = new Uint32Array(100);
const O = 79;
const A = 65;
const H = 72;
const S = 32;
const D = 100;
const Z = 48;

const countMentions = (n, a) => {
    users.fill(0, 0, n);
    let all = 0;
    a.sort((x, y) => {
        const tx = +x[1];
        const ty = +y[1];
        if (tx !== ty) return tx - ty;
        if (x[0].charCodeAt(0) === y[0].charCodeAt(0)) return 0;
        if (O === x[0].charCodeAt(0)) return -1;
        return 1;
    });
    for (let i = 0; i < a.length; ++i) {
        const e = a[i];
        if (O === e[0].charCodeAt(0)) { // "OFFLINE", "timestamp", "id"]
            offline[+e[2]] = 60 + +e[1];
        } else { // ["MESSAGE", "timestamp", "mentions_string"]
            const s = e[2];
            if (A === s.charCodeAt(0)) {
                ++all;
                continue;
            }
            if (H === s.charCodeAt(0)) {
                const t = +e[1];
                for (let id = 0; id < n; ++id) {
                    if (t >= offline[id]) ++users[id];
                }
                continue;
            }
            for (let j = 2; j < s.length - 1; j += 4) { // "id0 id1 ... id99"
                let id = s.charCodeAt(j) - Z;
                if (S !== s.charCodeAt(j + 1)) id = 10 * id + (s.charCodeAt(++j) - Z);
                ++users[id];
            }
            if (D === s.charCodeAt(s.length - 2)) ++users[s.charCodeAt(s.length - 1) - Z];
        }
    }
    for (let i = 0; i < n; ++i) {
        users[i] += all;
    }
    offline.fill(0, 0, n);
    return users.subarray(0, n);
};