

// Challenge 1 

// type IsString<T> = T extends string ? "Yes" : "No";
type IsString<T> = [T] extends [never]? "No" : T extends string ?"Yes":"No" 

// Intended: "No" (since never is not a string)
// Actual: never
type TestNever = IsString<never>;

// Find the Bug: Why does IsString<never> evaluate to never instead of "No"? How do conditional types behave with never, and how can you prevent this behavior if you want to check never literally?




// Challenge 2 


type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

function unwrap<T>(input: T): UnwrapPromise<T> {
  // Bug: TypeScript throws this error:
  // "Type 'T' is not assignable to type 'UnwrapPromise<T>'."

//return input; 
  return input as UnwrapPromise<T>
}



// Find the Bug: Why does TypeScript complain that input (which is type T) is not assignable to UnwrapPromise<T> even though it looks correct? How do you fix the function implementation or type annotation?


// Challenge 3 


//type WrapInArray<T> = T extends any ? T[] : never;
type WrapInArray<T> = [T] extends [any] ? T[] : never;


// Intended: (string | number)[]
// Actual: string[] | number[]
type Result = WrapInArray<string  | number>;

const items: Result = ["hello", 42]; // Bug: Type error! Why?