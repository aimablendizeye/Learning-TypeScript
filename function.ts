
function adding (a:number,b:number):number {
    return a + b
}
console.log(adding(4,7));


function type (a:number | string, b:number):string{

    if (typeof a === "number") {
       return `adding two number result is ${a + b}`
    }

    else {
        return `The input is a string`;
    } 
}

console.log(type("Having",6));