"use strict";
function NarcissisticNumberFunck(value) {
    const narcissisticNumberArr = value.toString().split('').map(el => +el);
    const narcissisticNumberPow = narcissisticNumberArr.map(el => el = Math.pow(el, narcissisticNumberArr.length));
    const narcissisticNumberSum = narcissisticNumberPow.reduce((acc, current) => {
        return acc + current;
    }, 0);
    return value === narcissisticNumberSum ? true : false;
}
NarcissisticNumberFunck(371);
