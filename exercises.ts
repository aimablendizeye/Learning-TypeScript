


// interface Malleable {
//     name: string;
//     age: number;
//     email: string;
// }

// interface futureMalliable extends Malleable {
//       marks(user:string , age:number):void
// }

// let user: Malleable = {
//     name: "Aimable",
//     age: 24,
//     email: "demo@gmail.com"
// };

// console.log(user.name)


// Function that add two numbers 

// * Challenge: using literal types and unions, update the Order status so that
//  * it can only ever be "ordered" or "completed"
//  */

type Order1 = {
    id: number
    pizza: string
    status: string
}

type Order2 = {
    id : number
    pizza : string
    status : "ordered" | "completed"
}

// Challenge 1 in the scrimb 

function getPizzaDetail (identifier:string|number) {
  if (typeof identifier == "string") {
    
  }
}


let name = getPizzaDetail ("Beef") 
console.log(name); 
