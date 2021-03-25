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