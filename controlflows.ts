
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