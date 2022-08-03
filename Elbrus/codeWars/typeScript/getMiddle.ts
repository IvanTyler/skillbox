function getMiddle(str: string): string {
    const strArr = str.split('')
    const middleIndex = Math.floor((str.length - 1) / 2)

    if (str.length % 2 === 0) {
        const StrArrmiddleElements = []
        for (let i = 0; i < 2; i++) {
            StrArrmiddleElements.push(...strArr.splice(middleIndex, 1))
        }
        return StrArrmiddleElements.join('')
    }

    return strArr[middleIndex]
}

console.log(getMiddle('middle'))

// export function getMiddle(s: string) {
//     const start = Math.floor(s.length / 2)
//     return s.length % 2 === 0 ? s.slice(start - 1, start + 1) : s[start]
// }