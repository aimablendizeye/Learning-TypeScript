

//  


function processValue<T>(value: T): T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never {

  if (typeof value === "string") {
    return value.toUpperCase() as any; // Type assertion needed due to limitations
  } else if (typeof value === "number") {
    return (value * 2) as any;
  } else if (typeof value === "boolean") {
    return (!value) as any;
  } else {
    throw new Error("Unsupported type");
  }
}

// Usage
const stringResult = processValue("hello"); // Returns "HELLO" (type is string)
const numberResult = processValue(10); // Returns 20 (type is number)
const boolResult = processValue(true); // Returns false (type is boolean)



// 



interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function updateField<T>(
  entity: T,
  key: keyof T,
  value: T[keyof T]
): T {
  return {
    ...entity,
    [key]: value
  };
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

const updated = updateField(user, "name", "Alice"); 

