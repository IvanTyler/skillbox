function isAValidMessage(message) {
    const arrayStringMessage = message.split('')
    const arrayStringMessageCopy = arrayStringMessage.slice(0)
    const arrayStringLetters = message.split('').filter(el => !+el)
    const arrayStringMutableNumbers = message.split('').filter(el => +el)


    console.log(arrayStringMutableNumbers)

    const isRightCountStringToNumber = arrayStringMutableNumbers.map(el => {
        return arrayStringMessageCopy.splice(arrayStringMessageCopy.indexOf(el) + 1, Number(el))
    })

    console.log(isRightCountStringToNumber)

    const comparison = isRightCountStringToNumber.every((el, i) => el.length === Number(arrayStringMutableNumbers[i]))

    const elementsNumber = message.split('')
        .map((el, i) => Number(el + arrayStringMessage[i - 1]) ?
            Number(Number(el + arrayStringMessage[i - 1]).toString().split('').reverse().join('')) : +el)

    const isfindingRightNumbers = elementsNumber.map((el, i) => {
        if (elementsNumber.includes(Number(Number(el + arrayStringMessage[i + 1]).toString().split('').reverse().join('')))) {
            return el
        }
    })
        .filter(el => typeof el !== 'undefined')
        .map((el, i) => +el ? +el : el.toString())
        .filter(el => +el)

    const words = isfindingRightNumbers.map((el, i) => arrayStringLetters.splice(0, el))
    const isComparableNumberDigitsNumberLetters = []
    const arr = words.map((el, i) => [isfindingRightNumbers[i], ...el])
        .map(el => isComparableNumberDigitsNumberLetters.push(...el))

    console.log(words, isComparableNumberDigitsNumberLetters);


    const findElementsString = isfindingRightNumbers.map((el, i) =>
        isComparableNumberDigitsNumberLetters.splice(isComparableNumberDigitsNumberLetters.indexOf(el) + 1, el))
    console.log(findElementsString);

    const comparison2 = findElementsString.every((el, i) => el.length === isComparableNumberDigitsNumberLetters[i])

    console.log(comparison2, comparison);

    return comparison && comparison2 === true ? comparison2 : comparison
}

console.log(isAValidMessage('10UGZqpSsCxnQbVm1419rCKhKCZQhdFpXLMxOzKJpKAgCirPW'))