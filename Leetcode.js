class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.groups = n;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    unite(a, b) {
        let pa = this.find(a);
        let pb = this.find(b);

        if (pa === pb) return false;

        this.parent[pb] = pa;
        this.groups--;
        return true;
    }
}

var maxStability = function(n, edges, k) {

    let dsu = new DSU(n);

    let mustStrength = [];
    let optStrength = [];

    let mustEdges = [];
    let optEdges = [];

    for (let e of edges) {
        if (e[3] === 1) {
            mustEdges.push(e);
        } else {
            optEdges.push(e);
        }
    }

    for (let e of mustEdges) {
        if (dsu.unite(e[0], e[1]) === false) return -1;
        mustStrength.push(e[2]);
    }

    optEdges.sort((a, b) => (b[2] * 2) - (a[2] * 2));

    for (let e of optEdges) {
        if (dsu.unite(e[0], e[1]) === true) {
            optStrength.push(e[2]);
        }
    }

    if (dsu.groups > 1) return -1;

    optStrength.sort((a, b) => a - b);

    let used = 0;

    for (let i = 0; i < optStrength.length && used < k; i++) {
        optStrength[i] *= 2;
        used++;
    }

    let res = Infinity;

    for (let v of mustStrength) res = Math.min(res, v);
    for (let v of optStrength) res = Math.min(res, v);

    return res;
};
