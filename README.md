Q. What is the use of the keyof keyword in TypeScript? Provide an example.

Answer:

In TypeScript, keyof is a type operator that returns a union of all property names (keys) of a given object type.
If you give it an object type, it extracts all the keys and turns them into a type.
keyof ensures that you can only access valid keys of the object, preventing runtime errors.

Example:


type Person = {
  name: string;
  age: number;
  country: string;
};

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const personDetails: Person = { name: "Samir", age: 25, country: "Bangladesh" };

console.log(getValue(personDetails, "name")); // valid


console.log(getValue(personDetails, "age"));  // valid


console.log getValue(personDetails, "email") error: Argument of type '"email"' is not assignable to parameter of type 'keyof Person'.


Q. Explain the difference between any, unknown, and never types in TypeScript.

Answer:

any:

In TypeScript, any is a type that disables type checking. You can assign any value to it, and use it freely without errors.


Example:

let a: any = 10;

a = "Hello";      // valid

a.toUpperCase();  // valid, no error

unknown:

In TypeScript, unknown is a safer version of any. You can assign any value to it, but you cannot use it without first checking its type.


Example:

let b: unknown = 10;

b = "Hello";      // valid

// b.toUpperCase();  //  Error: cannot use unknown without type check

if (typeof b === "string") {

  b.toUpperCase();  // valid after type check
}

never:

In TypeScript, never represents values that never occur. It is used for functions that never return or for unreachable code.


Example:

function throwError(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
