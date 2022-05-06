const cartesian = (arr: any[]) => {
    const mix = (pre: string[], next: string[]) => {
        return pre.reduce((acc, each) => {
            return acc.concat(next.map((e) => `${each}${e}`));
        }, [] as string[]);
    };
    const res = arr.reduceRight((acc, each, index) => {
        return index === a.length - 1 ? each : mix(each, acc);
    }, []);
    return res;
};

const a = [
    ['a', 'b'],
    ['n', 'm'],
    [0, 1],
];

console.log(cartesian(a)); // an0,an1,am0,am1,bn0,bn1,bm0,bm1