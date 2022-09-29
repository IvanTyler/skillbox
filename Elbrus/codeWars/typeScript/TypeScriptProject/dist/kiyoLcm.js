"use strict";
// function kiyoLcm(a: any[][]) {
//     const noEvenNumbers: any[] = a.map(el => el.filter(el => el % 2 !== 0 && typeof el !== 'string'))
//         .map(el => {
//             return el.reduce((acc: any, curr: any) => {
//                 return acc + curr
//             }, 0)
//         })
//     const nok = (noEvenNumbers: any[]) => {
//         const nod = (x: number, y: number): any => (!y ? x : nod(y, x % y))
//         const _nok = (x: number, y: number) => (x * y) / nod(x, y)
//         return noEvenNumbers.reduce((a, b) => _nok(a, b))
//     }
//     return isNaN(nok(noEvenNumbers)) ? 0 : nok(noEvenNumbers)
// }
// const kiyoLcmArr = Array(9).fill(Array(9).fill(null))
// const randomNumberkiyoLcm = kiyoLcmArr.map((el) => el.map((el: any) => el = Math.floor(Math.random() * (50 - 1) + 1)))
// console.log(kiyoLcm(randomNumberkiyoLcm))
// function isPrimeNum(num){
//     for (var i = 2; i < num; i++) {
//         if (num%i==0){
//             return false;
//         }
//     };
//     return true;
// }
// console.log(isPrimeNum(10))
// let n = 10; //  Код также должен легко модифицироваться для любых других интервалов. Например, prompt
// Здесь должна быть проверка, что целое число и не меньше двух
// for (let i = 3; i <= n; i++) { // Для всех чисел до n, от трёх
//     let isPrime = true;
//     for (let j = 2; j < i; j++) { // проверить, делится ли число без остатка на j
//         if (i % j === 0) { isPrime = false; break; } // не подходит, берём следующее
//     }
//     if (isPrime) alert(i); // простое число
// }
// function gcd(n: number, m: number): number {
//     console.log(n, 'm>>', m)
//     return m == 0 ? n : gcd(m, n % m);
// }
// function nok(n: number, m: number) {
//     console.log(n * m, gcd(n, m))
//     return n * m / gcd(n, m);
// }
// console.log(nok(36, 27));
// Основная функция, внутри которой происходят все вычисления. На вход она получает число, для которого нужно найти все простые множители
function PrimeNumber(InputNumber) {
    // объявляем внутреннюю функцию — она проверяет, простое число ей передали или нет
    function isPrime(m) {
        // перебираем все числа от 2 до переданного числа
        for (let i = 2; i < m; i++) {
            // если число делится нацело на любое число из этого диапазона, значит, оно не простое
            if (m % i === 0) {
                // возвращаем признак того, что это не простое число
                return false;
            }
        }
        // если мы дошли до сюда, значит, ни один делитель не подошёл, поэтому перед нами простое число
        return true;
    }
    console.log(isPrime(4));
    // массив, где будем хранить все найденные простые множители
    let sequence = [];
    // точно так же проходим все числа от 2 до введённого числа
    for (let j = 2; j < InputNumber; j++) {
        // если введённое число делится нацело и делитель — простое число,
        if (InputNumber % j === 0 && isPrime(j)) {
            // то добавляем это число в массив с простыми множителями
            sequence.push(j);
        }
    }
    // в конце основной функции возвращаем её значение — массив с простыми делителями
    return sequence;
}
;
// запускаем программу и смотрим результат
console.log(PrimeNumber(20));
