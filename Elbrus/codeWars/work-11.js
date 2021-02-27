function trouble(x, t){
    let summa;
    let one;
    let two;
    let indexOne;
    let sumNew = 0;
    let sumCountArr;
    let newArr = [];
    for (let i = 0; i < x.length; i++){
        one = x[i];
        two = x[i + 1];
        summa = one + two;
        if(summa === t){
          indexOne = x.indexOf(one);
          indexOne += 1;
          x.splice(indexOne, indexOne);
          sumNew += x[i];
          sumCountArr = sumNew / x.length;
          if(sumCountArr === 2){
              newArr.push(sumCountArr);
              return newArr;
          }
        }
    }
    return x;
  }


  function trouble(x, t){
    for(var i=0; i<x.length; i++) {
      if(x[i]+x[i+1]===t) {
        x.splice(i+1,1);
        i--;
      }
    }
    
    return x;
  }
