function encode(str, n) {
    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
        v: 22, w: 23, x: 24, y: 25, z: 26,
    }

    const newArrNumber = String(n).split('').map(el => Number(el))
    const myStrName = str.split('');
    const nullDataStr = []

    myStrName.forEach((el, i) => {
        newArrNumber.forEach(el => {
            nullDataStr.push(el)
        })
    })

    const numbersAlp = myStrName.map(el => alphabet[el])

    const removed = nullDataStr.splice(0, myStrName.length);

    const stringСipher = numbersAlp.map((el, i) => el + removed[i])

}

encode('masterpiece', 1939)

function encode(str, n) {
    const key = String(n)
    return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
}