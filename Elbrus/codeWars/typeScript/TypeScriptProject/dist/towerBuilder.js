"use strict";
function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
        let space = "";
        let star = "";
        for (let j = 0; j < nFloors - i; j++)
            space += " ";
        for (let j = 0; j < 2 * i + 1; j++)
            star += "*";
        tower.push(space + star + space);
    }
    const towerStarsSplitElements = tower.map((el) => el.split(''));
    const towerStarsSplitSplice = towerStarsSplitElements.map((el) => [el.splice(0, 1), el.splice(el.length - 1, 1)]);
    return towerStarsSplitElements.map((el) => el.join(''));
}
console.log(towerBuilder(3));
