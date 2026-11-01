
// Create Mapped type that makes all the properties optional 


interface Person {
    id : number;
    name : string;
    age : number;
    address : string;
}

type PartialPerson = {
     [P in keyof Person]?: Person[P]
}

function getUserInf (value: PartialPerson){
    if (typeof value.name === "string"){
        return value.name.length;
    }
}




// challenge 1 

interface UserConfig {
  theme?: string;
  timeout?: number;
}

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

// Bug: `StrictConfig` properties are still optional (`string | undefined`), 
// why didn't the mapped type remove the optional modifier?
type StrictConfig = MyRequired<UserConfig>;



// challenge 2 

interface Product {
  readonly id: number;
  name: string;
  description?: string;
}

// Prefix keys with "field_"

type PrefixedProduct<T> = {
  +readonly[K in keyof T as `field_${string & K}`]+?: T[K];
};

type Result = PrefixedProduct<Product>;

// Bug: `Result` allows modifying `id`, and all properties are now strictly required. 
// Why did key remapping (`as`) strip away `readonly` and `?`?


// challenge 3 


interface Point {
  x: number;
  y: number;
}

type Boxify<T> = {
  // Bug: TypeScript complains that `T` cannot be used this way or doesn't match the expected value shape.
  [K in keyof T]: { value: T[K] };
};

const boxedPoint: Boxify<Point> = {
  x: { value: 10 }, // Type error here!
  y: { value: 20 },
};



// challenge 4 


interface Person {
  name: string;
  age: number;
}

type Getters<T> = {
  // Bug: TypeScript throws a compilation error on `K` inside the template literal or Capitalize type.
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};