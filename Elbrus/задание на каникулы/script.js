    // let ticTacItems = [
    //     ['', '', ''],
    //     ['', '', ''],
    //     ['', '', '']
    // ];

    // function func_random(array) {

    //     let line_random = Math.floor(Math.random() * array.length);
    //     let column_random = Math.floor(Math.random() * array.length);

    //     for (let i = 0; i < array.length; i++){ 
    //         for (let j = 0; j < array.length; j++){
    //             array[line_random][column_random] = 'x';
    //         }
    //     }

    //     console.log(array);
    // }

    // func_random(ticTacItems);

    // let number = [1,-2,3,4,5];

    // function positiveSum(arr) {
    //     let newArray = [];
    //     for (let i = 0; i < arr.length; i++){
    //         if(arr[i] > 0 || arr[i] === 0){
    //             newArray.push(arr[i]);
    //         }
    //     }

    //     let summa = 0;
    //     for (let j = 0; j < newArray.length; j++){
    //         summa += newArray[j];
    //     }

    //     return summa;
    // }

    // let sumArr = positiveSum(number);
    // console.log(sumArr);


    function getGrade (a, b, c) {
        let summaArr = [a, b, c];
        let count_week_steps = summaArr.length;
        
        let summa = 0;
        for (let i = 0; i < summaArr.length; i++){
          summa += summaArr[i]; 
        }
    
        let count_sum_arr = summa / count_week_steps;
    
        if(count_sum_arr >= 90 && count_sum_arr <= 100 ){
              return 'A';
        } else if(count_sum_arr >= 80 && count_sum_arr < 90 ){
            return 'B';
        } else if(count_sum_arr >= 70 && count_sum_arr < 80 ){
            return 'C';
        } else if(count_sum_arr >= 60 && count_sum_arr < 70 ){
            return 'D';
        } else if(count_sum_arr >= 0 && count_sum_arr < 60 ){
            return 'F';
        }
    
    }
    
    let grade = getGrade(95,90,93);
    console.log(grade);

//     Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);
    
    // function func_tic_tac(arrTicTac) {
    //     for (let j = 0; j < arrTicTac.length; j++) {
    //         let x_count = 0;
    //         let o_count = 0;
    //         for(let i = 0; i < arrTicTac[j].length; i++){
    //             if(arrTicTac[j][i] === ''){
    //                 return false;
    //             } else if (arrTicTac[j][i] === 'x'){
    //                 x_count++;
    //                 if(x_count === 3){
    //                     return 'x';
    //                 }
    //             } else if (arrTicTac[j][i] === 'o'){
    //                 o_count++;
    //                 if(o_count === 3){
    //                     return 'o';
    //                 }
    //             }
    //         }
    //     }
    //     return false;
    // }

    // function func_column(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         let x_count = 0;
    //         let o_count = 0;
    //         for (let j = 0; j < 3; j++) {
    //                 if(array[i][j] ===  'x'){
    //                     x_count++;
    //                     if(x_count === 3){
    //                         return 'x';
    //                     }
    //                 }

    //                 if(array[i][j] ===  'o'){
    //                     o_count++;
    //                     if(o_count === 3){
    //                         return 'o';
    //                     }
    //                 }
    //             }                
    //         }
    //     return false;
    // }

    // function func_random(array) {
    //     for (let i = 0; i < 9; i++) {
    //         let roof = 0;
    //         let column = 0;
    //         while (array[roof][column] === 'x' || array[roof][column] === 'o') {
    //             roof = Math.floor(Math.random() * 3);
    //             column = Math.floor(Math.random() * 3);
    //         }
    //         if(i % 2 === 0 || i === 0){
    //             array[roof][column] = 'x';
    //         } else {
    //             array[roof][column] = 'o';
    //         }
    //         if( func_tic_tac(array) || func_column(array)){
    //             console.log(func_tic_tac(array));
    //             console.log(func_column(array));
    //             console.log(array);
    //             return  func_tic_tac(array) || func_column(array) ? func_tic_tac(array) || func_column(array) : array;
    //         }

    //     }
    //     console.log(func_tic_tac(array));
    //     console.log(func_column(array));
    //     console.log(array);
    //     return func_tic_tac(array) || func_column(array) ? func_tic_tac(array) || func_column(array) : array;
    // }
    
    // let arr_random = func_random(ticTacItems);
    // console.log(arr_random);
