function isPalindrome(x) {
    let resStr = x.split('').reverse()
    for (let i = 0; i < x.length; i++) {
        if (x[i].toLowerCase() !== resStr[i].toLowerCase()) return false
    }
    return true
}

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}