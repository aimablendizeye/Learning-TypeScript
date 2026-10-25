
/// Challenge 1

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

interface User {
  name: string;
  greet(message: string): void;
}

const user: DeepReadonly<User> = {
  name: "Alice",
  greet: (message: string) => console.log(message),
};

user.greet("Hello");




// Challenge 2


function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
