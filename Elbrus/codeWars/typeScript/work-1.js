var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var minSum = function (arr) {
    // const minMaxArr = []
    // let min = arr[0];
    // let max = arr[0];
    // for (let i = 0; i <= arr.length; i++) {
    //     if (min > arr[i]) {
    //         min = arr[i]
    //     }
    //     if (max < arr[i]) {
    //         max = arr[i]
    //     }
    // }
    // console.log(min, max)
    // console.log(arr.indexOf(min));
    // console.log(arr.splice(arr.indexOf(min), 1))
    var minMaxArr = [];
    function minMaxArrFunck(arr) {
        minMaxArr.push(__spreadArray(__spreadArray([], arr.splice(arr.indexOf(Math.max.apply(Math, arr)), 1), true), arr.splice(arr.indexOf(Math.min.apply(Math, arr)), 1), true));
        if (arr.length === 0)
            return minMaxArr;
        return minMaxArrFunck(arr);
    }
    minMaxArrFunck(arr);
    return minMaxArr.map(function (el) {
        return el.reduce(function (acc, curr) {
            return acc * curr;
        }, 1);
    }).reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
};
console.log(minSum([5, 4, 2, 3]));
