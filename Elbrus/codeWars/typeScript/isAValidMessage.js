function isAValidMessage(message) {
    if (message === '') return true
    const str = message.split(/[0-9]/g).filter((el) => el !== '')
    const num = message.split(/[a-zA-Z]/g).filter((el) => el !== '').map((el) => +el)
    const arr = message.split('')
        .map((el, i) =>
            +message.split('')[i] ? +message.split('')[i] + +message.split('')[i + 1] : el)
        .filter((el) => el !== +el)
        .map((el) => el.toString())

    const removeUnwantedItems = num.map((el) => arr.splice(arr.indexOf('NaN'), 1, el))
    console.log(arr)

    const isRightCountStringToNumber = num.map(el => {
        return arr.splice(arr.indexOf(Number(el)) + 1, Number(el))
    })

    const comparison = isRightCountStringToNumber
        .every((el, i) => el.length === Number(num[i]))

    console.log(num, isRightCountStringToNumber)
    return comparison
}

console.log(isAValidMessage('16uOMXMTzqovdhqzsU16vyVUlvsaYNvh12RAUTEhKVLiLjVoid'))
// 1417DqfhnRAiugKNpE19elTPdizOLRcusTfAEUcaoWbJuEJbUGnyeyQb13UUCDzioabrLIe15CRwBcqCRLpmzXFHAJfkbchPhUeItgfPi17
// 131310nfVNMoPFxXCCkOmcdGlzkSZrhNVeZQjUKplD181316KIMVeRZtZmXlSsIYMCbpiXqEqCfLIcEVoiZLjlsdWiNRjxlZIltDZPGAfpAjGF1512tNjyyhvfIPDbmpXvQfJIhjjrNAX15kJbfqnFlqtsosVryd18VqzwnjBOiFvxMKaPiV1710MEDQwRHTps161417DpJHLdXhuHDdxFfnWsXxKZtJmAMIVEWbwHuabbtslwdgTmJ181619VsuQVcGkOULuXwNbFchEQVfJLiGraHMJITNIGsEwBmpFqfsQrClPfNqkmshcLTYprLymp19xpWjoVRCrTyTWUSyZCmrmnhuERiJaUuuMMWAw1816FZgmVvXKmvHYgCsrXYaBeSoFMUVmCfiI161715hTNborPkgtiCTqfr10vGgIqxHPQxelpoKCjKxQMPGlWh14cNZyRCxKBv121517QVxRjnylgTKFGzMq16GriLRTywSnjnwexrBTlEeYbFweriXyhOzpWKPrqFGigkDBcOIYSHRWIHXvHqe1612rjUrWHQOFVoC1314QKtssaGFDLcfHDQVKI18xLNrqcxzDjzpMD13eFQGTgPWOsyWC