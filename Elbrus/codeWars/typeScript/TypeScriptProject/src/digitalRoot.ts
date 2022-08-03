function digitalRoot(n: number): number {
    const result = n.toString().split('').map(el => +el).reduce((acc, curr) => acc + curr, 0)
    return n.toString().split('').length === 1 ? result : digitalRoot(result)
};

const randomNumber = Math.floor(Math.random() * (999 - 1) + 1)
console.log(randomNumber)
console.log(digitalRoot(randomNumber))