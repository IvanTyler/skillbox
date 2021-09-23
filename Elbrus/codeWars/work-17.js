function billboard(name, price = 30) {
    let summa = 0
    for (let i = 0; i < price; i++) {
        summa += Number(name.length)
    }
    return summa
}

function billboard(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0);
}