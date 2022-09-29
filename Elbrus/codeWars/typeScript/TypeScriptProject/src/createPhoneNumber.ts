function createPhoneNumber(numbers: number[]): string {
    const codeOperators: string[] = numbers.slice(0, 3).join('').split('')
    const bracketFirst: string[] = codeOperators.splice(0, 0, '(')
    const bracketLast: string[] = codeOperators.splice(codeOperators.length, 0, ')')
    const addSpace: string[] = codeOperators.splice(codeOperators.length, 0, ' ')

    const joinCodeOperators: string[] = codeOperators

    const copyNumbers: string[] = numbers.slice(0).join('').split('')
    const spliceNumbers: string[] = copyNumbers.splice(0, 3)
    const pushDash: string[] = copyNumbers.splice(3, 0, '-')
    const joinNumbers: string[] = copyNumbers

    return [...joinCodeOperators, ...joinNumbers].join('')

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function createPhoneNumber(numbers) {
//     return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
// }