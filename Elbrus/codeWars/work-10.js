function oddOrEven(array) {
    let summa = 0;
    for (let i = 0; i < array.length; i++){
      summa += array[i];
    }
    if (summa % 2 === 0){
      return 'even';
    } else {
      return 'odd';
    }
  } 