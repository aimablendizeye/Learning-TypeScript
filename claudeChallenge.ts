

// challenge 1 

function getProp<T,U extends keyof T>(obj: T, key: U):T[U] {

  return obj[key];
}


//  challenge 2


type Shape =
  |{ kind: "circle"; radius: number }
  |{ kind: "square"; size: number }
  |{ kind: "triangle"; base: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.size ** 2;
    case "triangle":
        return s.base * s.height;   

    default:
        return 0;    
  }
}

// The triangle case is missing, so the function can return undefined. Add the case. To catch this in future, add a default that assigns s to a never variable.



// challenge 3


interface User { 
    id: number; 
    name: string 
}

async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

// An async function must return Promise<User>, not User. Also, res.json() returns Promise<any>, so consider as Promise<User> or validating the data.


// Challenge 4


const config = { mode: "dark", retries: 3 } as const;

const newConfig = {
    ...config,
    retries : 5
}

// as const makes every property readonly, so the assignment errors. Remove as const or don’t reassign.



// Challenge 5 

function length(s?: string ): number {

  if (s !== "string")return 0

    return s.length;
}


// s is string | undefined, so s.length errors under strictNullChecks. Use s?.length ?? 0 or check if (!s) return 0.



// challenge 6 

type Getters<T> = {

  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// keyof T can be string | number | symbol, and Capitalize only accepts strings. Use Capitalize<string & K>.


// challenge 7 

class Counter {
  count = 0;
  inc() { 
    this.count++;
   }
}
const c = new Counter();
setTimeout( () => c.inc, 100);

setTimeout (() =>console.log(c.count),100 )
; // expected 1 after the timeout


// challenge 8 

function isString(x: unknown): boolean {
  return typeof x === "string";
}

function shout(x: unknown) {
    if (typeof x == "string") {
    return x.toUpperCase();
  }
}
  


// challenge 9 

interface User { id: number; name: string; email: string }

function update(user: User, changes: Partial<User>): User {
  return { ...user, ...changes };
}

update({ id: 1, name: "Bo", email: "b@x.com" }, { name: "Ann" });

//changes: User requires all fields. Use changes: Partial<User>.


// challenge 10 

interface Logger {
  level: number;
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  level = 29;
  log(msg: string) { console.log(msg); }
}

// ConsoleLogger is missing the level property. Add level = 0; (or whatever number fits).



// Hard Questions 


// challenge 1 

// type Events = { 
//   login: { user: string }; 
//   logout: undefined };

// class Emitter<E> {
//   private handlers: { 
//     [K in keyof E]?: ((p: E[K]) => void)[] } = {};

//   on<K extends keyof E>(event: K, fn: (p: E[K]) => void) {
//     (this.handlers[event] ??= []).push(fn);
//   }

//   emit<K extends keyof E>(event: K, payload: E[K]): {
//     this.handlers[event]?.forEach(fn => fn(payload));
//   }
// }



// challenge 2 

// To avoid distribution we wrap the T and never with square bracket 

type IsNever<T> = [T] extends [never] ? true : false;
type R = IsNever<never>; // expected: true



// challenge 3 

type Action =
  | { type: "add"; item: string }
  | { type: "remove"; index: number }
  | { type: "clear" };

function reducer(state: string[], action: Action): string[] {
  switch (action.type) {
    case "add":
      state.push(action.item);
      return state;
    case "remove":
      return state.filter((_, i) => i !== action.index);

    case "clear":
      return state;
    // default:
    //   return state;   
        
  }
}


