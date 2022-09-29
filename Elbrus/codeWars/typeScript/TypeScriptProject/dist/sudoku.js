"use strict";
const sudokuSymbols = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
const sudokuCreatingNumbers = sudokuSymbols.split('');
const sudokuHorizontal = sudokuCreatingNumbers.map(el => sudokuCreatingNumbers.splice(0, 9))
    .filter(el => el.filter(el => typeof el !== 'undefined'));
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function horizontalCopy(borad) {
    return borad.map(el => el.slice());
}
const copyHorizontal = horizontalCopy(sudokuHorizontal);
function verticalBoard(board) {
    return board.map((el, i) => el.map((el, j) => board[j][i]));
}
function cubeBoard(board) {
    const threeFirstCubes = board.splice(0, 3);
    const threeMediumCubes = board.splice(0, 3);
    const threeBottomCubes = board.splice(0, 3);
    const allCubes = [];
    const threeCubesAllFirstElement = threeFirstCubes.map(el => {
        const element = [];
        threeFirstCubes.forEach(el => element.push(...el.splice(0, 3)));
        return element;
    });
    const threeCubesAllMediumElement = threeMediumCubes.map(el => {
        const element = [];
        threeMediumCubes.forEach(el => element.push(...el.splice(0, 3)));
        return element;
    });
    const threeCubesAllBottomElement = threeBottomCubes.map(el => {
        const element = [];
        threeBottomCubes.forEach(el => element.push(...el.splice(0, 3)));
        return element;
    });
    allCubes.push(...threeCubesAllFirstElement, ...threeCubesAllMediumElement, ...threeCubesAllBottomElement);
    return allCubes;
}
function compleatedPrettyBoard() {
    return [...copyHorizontal, ...verticalBoard(sudokuHorizontal), ...cubeBoard(sudokuHorizontal)];
}
console.log(compleatedPrettyBoard());
// function solveSudoku(board: any[][]) {
//     const size = 9
//     function findEmpty(board: any[][]) {
//         for (let r = 0; r < 9; r++) {
//             for (let c = 0; c < 9; c++) {
//                 if (board[r][c] === '-') return [r, c]
//             }
//         }
//         return null
//     }
//     function validate(num: string, pos: number[], board: any[][]) {
//         const [r, c] = pos
//         for (let i = 0; i < size; i++) {
//             if (board[i][c] === num && i !== r) return false
//         }
//     }
//     function solve() {
//         const currPos = findEmpty(board)
//         if (currPos === null) {
//             return true
//         }
//         for (let i = 1; i < size + 1; i++) {
//             const currNum = i.toString()
//             const isValid = validate(currNum, currPos, board)
//         }
//         return false
//     }
//     solve()
//     return board
// }
// console.log(solveSudoku(copyHorizontal))
// console.table(verticalBoard(sudokuHorizontal))
