let number = 145263;
newString = number.toString();
newString = newString.split('');
newString.sort();

let newArray = [];
for (let i = newString.length - 1; i >= 0; i--) {
    newArray.push(newString[i]);
}

newArray = newArray.join('');
newArray = Number(newArray);

console.log(newArray);

function descendingOrder(n) {
    n = n.toString();
    n = n.split('');
    n.sort();

    let newArray = [];
    for (let i = n.length - 1; i >= 0; i--) {
        newArray.push(n[i]);
    }

    newArray = newArray.join('');
    newArray = Number(newArray);
    return newArray;
}