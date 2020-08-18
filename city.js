

/* 
Bangalore
(1:00, 10), (1:05, 12), (1:15, 20), (2:00, 9)
*/

/* 
Kolkata
(1:03, 11), (1:05 11), (1:30, 3), (2:30, 4)
*/

/*
total
(1:00, 10), (1:03, 21), (1:05, 23), (1:15, 31), (1:30, 23), (2:00, 12), (2:30, 13)
*/


let total = (inp1, inp2) => {
    let arrConcat = inp1.concat(inp2);
    
    const sums = {}

for(const [key, value] of arrConcat){
  if(sums[key] || sums[key] === 0){
    sums[key] += value
  } else {
    sums[key] = value
  }
}
var sortedArr = [];

for (var k in sums) {
  sortedArr.push([k, sums[k]]);
}

sortedArr.sort()

console.log(sortedArr)
}


let a = [["1:00",10], ["1:05",12], ["1:15",20], ["2:00" ,9]];

let b = [["1:03",11], ["1:05",11],[ "1:30",3],[ "2:30",4]]

total(a,b)
// city a and city b
// for a check if the key is there in b ? total  : a 
// move to next time fram 




