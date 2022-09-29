"use strict";
function isAValidMessage(message) {
    const str = message.split(/[0-9]/g).filter((el) => el !== '');
    const num = message.split(/[a-zA-Z]/g).filter((el) => el !== '').map((el) => +el);
    const arr = message.split('')
        .map((el, i) => +message.split('')[i] ? +message.split('')[i] + +message.split('')[i + 1] : el)
        .filter((el) => el !== +el).join('');
    // const findNumbersToString = message.match(/-?\d+(\.\d+)?/g)
    // const deleteNumbers = message.replace(/[0-9]/g, '-').split('')
    console.log(message);
}
isAValidMessage('4code13hellocodewars');
// 1417DqfhnRAiugKNpE19elTPdizOLRcusTfAEUcaoWbJuEJbUGnyeyQb13UUCDzioabrLIe15CRwBcqCRLpmzXFHAJfkbchPhUeItgfPi17
// 131310nfVNMoPFxXCCkOmcdGlzkSZrhNVeZQjUKplD181316KIMVeRZtZmXlSsIYMCbpiXqEqCfLIcEVoiZLjlsdWiNRjxlZIltDZPGAfpAjGF1512tNjyyhvfIPDbmpXvQfJIhjjrNAX15kJbfqnFlqtsosVryd18VqzwnjBOiFvxMKaPiV1710MEDQwRHTps161417DpJHLdXhuHDdxFfnWsXxKZtJmAMIVEWbwHuabbtslwdgTmJ181619VsuQVcGkOULuXwNbFchEQVfJLiGraHMJITNIGsEwBmpFqfsQrClPfNqkmshcLTYprLymp19xpWjoVRCrTyTWUSyZCmrmnhuERiJaUuuMMWAw1816FZgmVvXKmvHYgCsrXYaBeSoFMUVmCfiI161715hTNborPkgtiCTqfr10vGgIqxHPQxelpoKCjKxQMPGlWh14cNZyRCxKBv121517QVxRjnylgTKFGzMq16GriLRTywSnjnwexrBTlEeYbFweriXyhOzpWKPrqFGigkDBcOIYSHRWIHXvHqe1612rjUrWHQOFVoC1314QKtssaGFDLcfHDQVKI18xLNrqcxzDjzpMD13eFQGTgPWOsyWC
