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

// This T and U  means that we have difference type to pass in the function  

function adding <T,U>(a:T,b:U) {
    return a 
}

let result = adding(2,4)
console.log(result);


// Example 3 

const arr = [2,3,5,67,8]
const str = ["Aimable","Mugabo","Reponse","Manzi"]

function getElem<Type> (arr:Type[]) {
 return arr[arr.length-1];
}

console.log(getElem(str));




