


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

function assertIsString(val: unknown): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Expected a string");
  }
}

function processInput(input: string | number | null) {
  assertIsString(input);

  // TypeScript successfully narrows `input` to `string` here:
  console.log(input.toUpperCase()); 

  setTimeout(() => {
    // Bug: Why does TypeScript throw an error on this line saying `input` might still be `string | number | null`?
    console.log(input.toUpperCase());
  }, 1000);
}