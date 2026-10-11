// Generics  functions 

function identify <T>(value:T):T {
 return value;
    
}
const number = identify<string> ("Aimable");

console.log(number);


// Function Generics with multiple parameters 

function combine <T,U> (value1:T,value2:U) {
    return [value1,value2]
}

const inform = combine (23,"aimable")

console.log(...inform);



