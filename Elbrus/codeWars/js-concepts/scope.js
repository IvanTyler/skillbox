// function funckA(a) {
//     return function(b) {
//         return a + b
//     }
// }

// console.log(funckA(5)(6))

// function createFrameworkManager() {
//     const fw = ['react', 'angular']

//     return {
//         print: function() {
//             console.log(fw)
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1000)
    })(i)
}

let num1 = 1

var num3 = 3

{
    let num1 = 2
    var num3 = 4
    console.log(num1)
    console.log(num3)
}

console.log(num3, num1)