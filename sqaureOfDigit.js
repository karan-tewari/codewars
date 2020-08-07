https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let arr = num.toString().split("")
    let sum = []
    arr.map(x => {       
        sum.push(x*x);
    })
    return (parseInt(sum.join("")))
}
