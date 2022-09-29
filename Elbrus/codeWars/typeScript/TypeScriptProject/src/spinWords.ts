function spinWords(words: string): string {
    return words.split(' ').map(el => el.split(''))
        .map(el => el.length >= 5 ? el.reverse() : el)
        .map(el => el.join('')).join(' ')
}

console.log(spinWords("This is another test"))