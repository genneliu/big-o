function squareEveryDigit(numb) {
    let currentStr = "";
    let squaredNums = 0;
    let stringNum = numb.toString();
    for (let i = 0; i <stringNum.length; i++) {
      currentStr += +stringNum.charAt(i) * +stringNum.charAt(i)
    }
    return currentStr
    }

  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }
  

console.log(squareEveryDigit(946)) // When running 946, you should see a result of 811636
console.log(squareDigits(946))
