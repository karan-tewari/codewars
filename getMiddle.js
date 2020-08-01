function getMiddle(s)
{
 let splited = s.split("");
//     console.log(splited);
    if(splited.length % 2 === 0){
        // console.log(splited.join(",").toString().charAt(5))
       return (splited[splited.length/2 -1] + splited[splited.length/2]);
        
        
    }
    else{
//         console.log("odd");
        return (splited[Math.ceil(splited.length/2 -1)]);
    }
}