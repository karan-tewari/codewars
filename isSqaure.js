// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
    if(n < 0){
      return false
    }
    else if(Math.sqrt(n) % 1 === 0){
          return true
      }
      else{
          return false
      }
  }  

  isSquare(25)