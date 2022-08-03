function NarcissisticNumberFunck(value: number): boolean {
    const narcissisticNumberArr: number[] = value.toString().split('').map(el => +el)

    const narcissisticNumberPow: number[] = narcissisticNumberArr.map(el => el = Math.pow(el, narcissisticNumberArr.length))
    const narcissisticNumberSum = narcissisticNumberPow.reduce((acc: number, current: number) => {
        return acc + current
    }, 0)

    return value === narcissisticNumberSum ? true : false
}
NarcissisticNumberFunck(371)
