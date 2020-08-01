// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
    var vowelsCount = 0;

    let vowels = ["a","e","i","o","u"]
    
    let splited = str.split("");
    console.log(splited);
    splited.filter(v => {
        if(vowels.includes(v)){
            vowelsCount++;
        }
    })
    console.log(vowelsCount)
    
    return vowelsCount;
  }

  getCount("iouaeafnasifaicasck");