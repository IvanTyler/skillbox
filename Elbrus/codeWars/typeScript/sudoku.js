var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sudokuSymbols = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
var sudokuCreatingNumbers = sudokuSymbols.split('').map(function (el) { return el !== '-' ? +el : el; })
    .map(function (el) { return el === '-' ? el = 5 : el; });
var sudokuHorizontal = sudokuCreatingNumbers.map(function (el) { return sudokuCreatingNumbers.splice(0, 9); })
    .filter(function (el) { return el.filter(function (el) { return typeof el !== 'undefined'; }); });
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
function horizontalCopy(borad) {
    return borad.map(function (el) { return el.slice(); });
}
var copyHorizontal = horizontalCopy(sudokuHorizontal);
function verticalBoard(board) {
    return board.map(function (el, i) { return el.map(function (el, j) { return board[j][i]; }); });
}
function cubeBoard(board) {
    var threeFirstCubes = board.splice(0, 3);
    var threeMediumCubes = board.splice(0, 3);
    var threeBottomCubes = board.splice(0, 3);
    var allCubes = [];
    var threeCubesAllFirstElement = threeFirstCubes.map(function (el) {
        var element = [];
        threeFirstCubes.forEach(function (el) { return element.push.apply(element, el.splice(0, 3)); });
        return element;
    });
    var threeCubesAllMediumElement = threeMediumCubes.map(function (el) {
        var element = [];
        threeMediumCubes.forEach(function (el) { return element.push.apply(element, el.splice(0, 3)); });
        return element;
    });
    var threeCubesAllBottomElement = threeBottomCubes.map(function (el) {
        var element = [];
        threeBottomCubes.forEach(function (el) { return element.push.apply(element, el.splice(0, 3)); });
        return element;
    });
    allCubes.push.apply(allCubes, __spreadArray(__spreadArray(__spreadArray([], threeCubesAllFirstElement, false), threeCubesAllMediumElement, false), threeCubesAllBottomElement, false));
    return allCubes;
}
function compleatedPrettyBoard() {
    return __spreadArray(__spreadArray(__spreadArray([], copyHorizontal, true), verticalBoard(sudokuHorizontal), true), cubeBoard(sudokuHorizontal), true);
}
copyHorizontal.forEach(function (el) { return isDoble(el); });
function isDoble(array) {
    var notElement = array.filter(function (el) {
        if (!num.includes(el))
            return el;
    });
    console.log(notElement);
}
// console.table(arr)
// console.table(verticalBoard(sudokuHorizontal))
