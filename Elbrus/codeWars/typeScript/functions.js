// function add(a: number, b: number): number {
//     return a + b
// }
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty:', position());
console.log('One param:', position(42));
console.log('Two params:', position(10, 15));
