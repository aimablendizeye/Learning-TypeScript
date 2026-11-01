
// conditonal Type 

// Infer keyword in Ts:

// simply infer says look inside the box and tell what's inside 

// Why is infer used with conditional types?

// because it help us to automatical assign and determine the type of variables 

// Challenge 1 


interface User {
  id: number;
  name: string;
  email: string;
}

function getUserProperty<T, K extends keyof T >(user: T, key: K):T[K] {
  // Bug: TypeScript throws an error here: 
  // "Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'User'."
  return user[key];
}


// challenge 2

function printUppercase(value: string | null) {

    // before it was if (typeof value === "object")
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

printUppercase("hello");




// challenge 3 


function appendZero(nums: readonly number[]): number[] {
  
  return [...nums,0];
}

const scores: readonly number[] = [85, 90, 95];

// Bug: TypeScript complains that `scores` cannot be assigned to the parameter of type `number[]`.
const updatedScores = appendZero(scores);



// challenge 4 


function getProperty<T, K extends keyof T>(obj: T, key: K):T[K] {
  // Bug: TypeScript throws an error: 
  // "Type 'K' cannot be used to index type 'T'."
  return obj[key];
}

const person = { name: "Bob", age: 30 };
const age = getProperty(person, "age");




// challenges on Conditional types 

// challenge 1

type IsString<T> = [T] extends [never] ? "No" : [T] extends [string]? "Yes" : "No";

// Intended: "No" (since never is not a string)
// Actual: never
type TestNever = IsString<never>;
