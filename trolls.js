// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    //      console.log(str);
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let splited = str.split("");
        let myFiltertedText = [];
        splited.filter(x => {
            if(vowels.includes(x)){
                return null;
            }
            else{
                myFiltertedText.push(x);
            }
        })
       return (myFiltertedText.join(""))

    //    str.replace(/[aeiou]/gi, '');
    //I liked the alt approach to this problem with simply replacing the contents with '' + the case is also a matched one , so overall a single line solution using replace and regex
    }