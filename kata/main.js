// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    let splitted = s.split("")
    let output = "";
    splitted.map((x,i) => {
        let my = (x.toUpperCase() + x.repeat(i) + "-");
        console.log(my);
    })
    console.log(output)
}

accum("abcd");

// "A-Bb-Ccc-Dddd"