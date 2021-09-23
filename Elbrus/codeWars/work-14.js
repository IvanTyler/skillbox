<<<<<<< HEAD
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0]
        args.forEach((el, index) => {
            if (min > el) {
                min = el
            }
        })
        return min
    }
}

let integer = new SmallestIntegerFinder;
let number = integer.findSmallestInt([78, 56, 232, 12, 8])
console.log(number)
=======
let string = 'The quick white fox jumped around the massive dog';
string = string.split(' ');

function check_arr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(min.length < arr[i].length){
            min = arr[i];
        }   
    }
    return min.length;
}

let check = check_arr(string);
console.log(check);
>>>>>>> 02a0abc59899f8569e8e450216661bd78f82add9
