// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript  

function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    console.log(arr[arr.length -1] + ' ' + arr[0]);
  }

  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");