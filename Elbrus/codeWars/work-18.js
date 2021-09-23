function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0) && (flower2 % 2 === 0) || (flower1 % 2 !== 0) && (flower2 % 2 !== 0)) return false
    return true
}

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}