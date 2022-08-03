function getMiddle(str) {
    var strArr = str.split('');
    var middleIndex = Math.floor((str.split('').length - 1) / 2);
    if (strArr.length % 2 === 0) {
        var StrArrmiddleElements = [];
        for (var i = 0; i < 2; i++) {
            StrArrmiddleElements.push.apply(StrArrmiddleElements, strArr.splice(middleIndex, 1));
        }
        return StrArrmiddleElements.join('');
    }
    return strArr[middleIndex];
}
console.log(getMiddle('middle'));
