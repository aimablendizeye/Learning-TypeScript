
/// Challenge 1

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

interface Challenge1User {
  name: string;
  greet(message: string): void;
}

const user: DeepReadonly<Challenge1User> = {
  name: "Alice",
  greet: (message: string) => console.log(message),
};

user.greet("Hello");




// Challenge 2


function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}



// challenge 3

function printUppercase(value: string | null) {
  if (typeof value === "string") {
    // Bug: TypeScript still thinks `value` might be null here, 
    // causing an error when calling `.toUpperCase()`.
    console.log(value.toUpperCase());
  }
}



// Challenge 4 


interface User {
  id: number;
  name: string;
  email: string;
}

function getUserProperty<K extends keyof User>(user: User, key: K): User[K] {
  return user[key];
}


// Challenge 6 

function appendZero(nums: readonly number[]): number[] {
  return [...nums, 0];
}

const scores: readonly number[] = [85, 90, 95];
const updatedScores = appendZero(scores);
console.log(updatedScores);