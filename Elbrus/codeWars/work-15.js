function usdcny(usd) {
    let yuan = 6.75
    let sumCurrency = yuan * usd
    let summa = sumCurrency.toFixed(2)
    return `${summa} Chinese Yuan`
}

console.log(usdcny(5))