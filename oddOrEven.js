// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function oddOrEven(array) {
    let s = 0;
     array.map((arr) => {
       return s= s+arr;
     })
     console.log(s)
    if(s % 2 === 0){
      return console.log("even");
    }
    else{
      return console.log("odd")
    }
  }

  oddOrEven([0]);