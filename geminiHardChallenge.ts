


/// Challenge 1

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : T[K] extends object
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

const stringIput = input;

  console.log(stringIput.toUpperCase()); 

  setTimeout(() => {
    // Bug: Why does TypeScript throw an error on this line saying `input` might still be `string | number | null`?

    // Because   Narrowings are based on control flow, but closures/callbacks can invalidate assumptions about variables that may change before the callback executes.

    console.log(stringIput.toUpperCase());
  }, 1000);
}


// Challenge 3 


type Clean<T> = [T] extends [null | undefined] ? never : T;

// Intended: string[] | number[]
// Actual: (string | number)[] or something unexpected depending on distribution.
type Result = Clean<string[] | null | undefined>;

const val: Result = ["hello"];



// challenge 4 


type Actions<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: (payload: T[K]) => void;
};

interface Settings {
  theme: "dark" | "light";
  debug: boolean;
}

type SettingsListeners = Actions<Settings>;

// Bug: A developer tries to implement SettingsListeners, but TypeScript complains about optional properties or missing handlers.
const listeners: SettingsListeners = {
  onTheme: (theme) => {},
  onDebug:(debug) => {}
  // onDebug is missing, but TypeScript doesn't require it even though `debug` was optional in Settings. Why?
};