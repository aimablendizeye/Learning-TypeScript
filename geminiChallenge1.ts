




// Challenge 1


function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}



// challenge 2

function printUppercase(value: string | null) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

printUppercase("hello");
printUppercase(null);



// Challenge 3


interface User {
  id: number;
  name: string;
  email: string;
}

function getUserProperty<K extends keyof User>(user: User, key: K): User[K] {
  return user[key];
}


// Challenge 4


function appendZero(nums: readonly number[]): number[] {
  return [...nums, 0];
}

const scores: readonly number[] = [85, 90, 95];
const updatedScores = appendZero(scores);
console.log(updatedScores);





// Challenge 5 

function getProperty<T, K extends keyof T>(obj: T, key: K):T[K] {
  // Bug: TypeScript throws an error: 
  // "Type 'K' cannot be used to index type 'T'."
  return obj[key];
}

const person = { name: "Bob", age: 30 };
const age = getProperty(person, "age");








