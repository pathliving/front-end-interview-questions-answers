# Typescript (questions prepared)

1. The primitives (string, number, and boolean)

Primitives in TypeScript are the most basic types:
string: Represents textual data. Example: let name: string = "Alice";
number: Represents numeric values. Example: let age: number = 30;
boolean: Represents true/false values. Example: let isActive: boolean = true;
Reference

2. Less Common Primitives (bigint, symbol)

bigint: Represents arbitrarily large integers. Example: let bigNum: bigint = 12345678901234567890n;
symbol: Represents unique and immutable identifiers. Example: let sym: symbol = Symbol("unique");
Reference
Reference

3. Arrays

Arrays are used to store multiple values of the same type. Example: `let list: number[] = [1, 2, 3];`
Generic array type: `let list: Array<number> = [1, 2, 3];`
Reference

4. Any

any type allows for values to bypass type-checking. Example: let anything: any = "hello";
Useful for gradual typing or when working with dynamic content.
Reference

5. Type Annotations on Variables

Type annotations explicitly specify the type of a variable. Example: let myName: string = "Alice";
Helps with type checking and readability.
Reference

6. Functions

Functions can have type annotations for parameters and return values. Example:
typescript
Copy code

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

Reference

7. Object types (optional properties, readonly properties, index signatures)

Optional properties: `interface User { name: string; age?: number; }`
Readonly properties: `interface User { readonly id: number; name: string; }`
Index signatures: `interface StringArray { [index: number]: string; }`
Reference
Reference
Reference

8. Mapped types (build on the index signatures syntax)

Mapped types transform properties in a type. Example:
typescript
Copy code

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

Reference

9. Tuple types

Tuples represent an array with fixed types and length. Example: `let person: [string, number] = ["Alice", 30];`
Reference

10. Union types

Union types allow a variable to be one of several types. Example: `let id: number | string;`
Reference

11. Template Literal types

Template literal types allow concatenation of string literals at the type level. Example:
typescript
Copy code

```ts
type Greeting = `Hello, ${string}`;
```

Reference

12. Type Aliases

Type aliases create a new name for a type. Example: `type ID = number | string;`
Reference

13. Interfaces

Interfaces define the shape of an object. Example:
typescript
Copy code

```ts
interface User {
  name: string;
  age: number;
}
```

Reference

14. Differences Between Type Aliases and Interfaces** (intersection vs extending**, can’t adding\* vs adding new fields to an existing entity**)**

Type Aliases: Can represent primitives, unions, tuples, etc. Cannot be extended after creation.
Interfaces: Can be extended using extends and allow for declaration merging.
Example of intersection: `type A = { x: number } & { y: number };`
Example of extending: `interface B extends A { z: number; }`
Reference

15. Type Assertions (as)

Type assertions tell the compiler to treat a value as a specific type. Example: `let someValue: any = "hello"; let strLength: number = (someValue as string).length;`
Reference

16. Null and undefined (Non-null Assertion Operator (Postfix !))

Non-null assertion operator (!) tells the compiler a value is not null or undefined. Example: `let name: string | null; name!;`
Reference

17. Enums

Enums define a set of named constants. Example:
typescript
Copy code

```ts
enum Color {
  Red,
  Green,
  Blue,
}
```

Reference

18. typeof type guards (truthiness narrowing)

typeof checks the type of a variable at runtime. Example:
typescript
Copy code

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}
```

Reference

19. Equality narrowing `(===, !==, ==, and !=)`

Equality narrowing uses comparison operators to narrow types. Example:
typescript
Copy code

```ts
function example(x: string | number) {
  if (x === "string") {
    // x is string
  } else {
    // x is number
  }
}
```

Reference

20. The in operator narrowing

in operator checks if a property exists in an object. Example:
typescript
Copy code

```ts
function isSquare(shape: any): shape is Square {
  return "size" in shape;
}
```

Reference

21. instanceof narrowing

instanceof checks if an object is an instance of a class. Example:
typescript
Copy code

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

Reference

22. Assignments

TypeScript infers types based on assignments. Example:
typescript
Copy code

```ts
let x = "hello"; // x is inferred as string
```

Reference

23. type predicates (isFish)

Type predicates are custom type guards. Example:
typescript
Copy code

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

Reference

24. Discriminated unions

Discriminated unions use a common property to differentiate between types. Example:
typescript
Copy code

```ts
interface Square {
  kind: "square";
  size: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Circle;
```

Reference

---

25. never type
    The never type represents values that never occur. It is used to indicate that a function never returns (e.g., it throws an exception or terminates the program) or for variables that are impossible to have a value.

26. Call Signatures
    Call signatures define the type of a function by specifying the types of its parameters and its return type. In TypeScript, you can define a call signature within an interface or type alias.

typescript
Copy code

```ts
type Add = (a: number, b: number) => number;
```

27. Generic Functions (Inference, Constraints)
    Generic functions allow you to create functions that can work with any type, providing type inference and constraints for more flexibility.

Inference:
TypeScript infers the type based on the function's usage.

typescript
Copy code

```ts
function identity<T>(arg: T): T {
  return arg;
}
let output = identity("myString"); // TypeScript infers the type as string
```

Constraints:
You can constrain a generic type to ensure it meets certain criteria.

typescript
Copy code

```ts
function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length); // Now we know it has a length property
  return arg;
}
```

28. Optional Parameters in Callbacks
    Optional parameters in functions can be defined using ? after the parameter name.

typescript
Copy code

```ts
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}
```

29. Function Overloads
    Function overloads allow you to define multiple signatures for a function. The implementation must handle all possible cases.

typescript
Copy code

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

30. void type
    The void type represents the absence of having any type at all. It is typically used as the return type of functions that do not return a value.

typescript
Copy code

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

31. object type
    The object type represents any non-primitive type, i.e., anything that is not number, string, boolean, symbol, null, or undefined.

typescript
Copy code

```ts
let obj: object = { name: "Alice" };
```

32. unknown type
    The unknown type is the type-safe counterpart of any. It requires the developer to perform type assertions or checks before using it.

typescript
Copy code

```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe to use as a string
}
```

33. Function type
    The Function type describes any callable object, but it's better to specify the exact function signature.

typescript
Copy code

```ts
let myFunc: (x: number, y: number) => number;
myFunc = function (a, b) {
  return a + b;
};
```

34. Namespaces vs Modules
    Namespaces are used for organizing code within a global scope, primarily in older codebases.

typescript
Copy code

```ts
namespace MyNamespace {
  export class MyClass {}
}
```

Modules (ES6 modules) are the standard for code organization, providing scoped code and avoiding global pollution.

typescript
Copy code

```ts
// In file1.ts
export class MyClass {}

// In file2.ts
import { MyClass } from "./file1";
```

35. File declarations (d.ts)
    Declaration files (.d.ts) provide type information about JavaScript code to TypeScript.

typescript
Copy code

```ts
// lodash.d.ts
declare module "lodash" {
  export function chunk<T>(array: T[], size: number): T[][];
}
```

36. Utility types
    `Awaited<Type>`: Resolves the type of a promise.

typescript
Copy code

```ts
type Result = Awaited<Promise<string>>; // string
```

`Partial<Type>`: Makes all properties in Type optional.

typescript
Copy code

```ts
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>; // { name?: string; age?: number; }
```

`Required<Type>`: Makes all properties in Type required.

typescript
Copy code

```ts
type RequiredPerson = Required<PartialPerson>; // { name: string; age: number; }
```

`Readonly<Type>`: Makes all properties in Type readonly.

typescript
Copy code

```ts
type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }
```

`Record<Keys, Type>`: Constructs an object type with a set of properties Keys of Type.

typescript
Copy code

```ts
type Roles = "admin" | "user";
type Permissions = Record<Roles, boolean>; // { admin: boolean; user: boolean; }
```

`Pick<Type, Keys>`: Creates a type by picking properties Keys from Type.

typescript
Copy code

```ts
type NameOnly = Pick<Person, "name">; // { name: string; }
```

`Omit<Type, Keys>`: Creates a type by omitting properties Keys from Type.

typescript
Copy code

```ts
type AgeOmitted = Omit<Person, "age">; // { name: string; }
```

`Exclude<UnionType, ExcludedMembers>`: Excludes members from a union type.

typescript
Copy code

```ts
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

`Extract<Type, Union>`: Extracts members from a union type that are assignable to another type.

typescript
Copy code

```ts
type T = Extract<"a" | "b" | "c", "a" | "f">; // "a"
```

`NonNullable<Type>`: Excludes null and undefined from Type.

typescript
Copy code

```ts
type T = NonNullable<string | null>; // string
```

`Parameters<Type>`: Extracts the parameter types of a function type as an array.

typescript
Copy code

```ts
type T = Parameters<(a: string, b: number) => void>; // [string, number]
```

`ConstructorParameters<Type>`: Extracts the parameter types of a constructor type as an array.

typescript
Copy code

```ts
type T = ConstructorParameters<ErrorConstructor>; // [message?: string]
```

`ReturnType<Type>`: Extracts the return type of a function type.

typescript
Copy code

```ts
type T = ReturnType<() => string>; // string
```

`InstanceType<Type>`: Extracts the instance type of a constructor function type.

typescript
Copy code

```ts
type T = InstanceType<typeof Date>; // Date
```

`NoInfer<Type>`: Prevents TypeScript from inferring a type.

typescript
Copy code

```ts
type T<T> = T extends T ? true : false;
```

`ThisParameterType<Type>`: Extracts this type from a function type.

typescript
Copy code

```ts
function toHex(this: Number) {
  return this.toString(16);
}
type T = ThisParameterType<typeof toHex>; // Number
```

`OmitThisParameter<Type>`: Removes this parameter from a function type.

typescript
Copy code

```ts
function toHex(this: Number) {
  return this.toString(16);
}
type T = OmitThisParameter<typeof toHex>; // () => string
```

`ThisType<Type>`: Specifies the type of this in a function.

typescript
Copy code

```ts
interface MyObject {
  count: number;
  increment(this: MyObject): void;
}
```

Intrinsic String Manipulation Types:

`Uppercase<StringType>`: Transforms a string type to uppercase.

typescript
Copy code

```ts
type T = Uppercase<"hello">; // "HELLO"
```

`Lowercase<StringType>`: Transforms a string type to lowercase.

typescript
Copy code

```ts
type T = Lowercase<"HELLO">; // "hello"
```

`Capitalize<StringType>`: Transforms the first character of a string type to uppercase.

typescript
Copy code

```ts
type T = Capitalize<"hello">; // "Hello"
```

`Uncapitalize<StringType>`: Transforms the first character of a string type to lowercase.

typescript
Copy code

```ts
type T = Uncapitalize<"Hello">; // "hello"
```

37. Decorators

Decorators are special declarations that can be attached to classes and methods to modify their behavior. They are often used for logging, validation, or dependency injection.

typescript
Copy code

```ts
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
}
class Example {
  @Log
  greet(name: string) {
    return `Hello, ${name}`;
  }
}
```

38. Symbols
    Symbols are a primitive data type representing unique tokens. They are often used as keys for object properties to avoid name collisions.

typescript
Copy code

```ts
const uniqueKey = Symbol("key");
const obj = {
  [uniqueKey]: "value",
};
console.log(obj[uniqueKey]); // "value"
```

39. Triple-Slash Directives
    Triple-slash directives are single-line comments containing a single XML tag that provide instructions to the compiler.

typescript
Copy code

```ts
/// <reference path="path/to/file.ts" />
```

40. Type Inference
    Type inference is a TypeScript feature where the compiler automatically determines the type of a variable based on its initial value or context.

typescript
Copy code

```ts
let x = 10; // TypeScript infers x as number
```

41. using declarations
    using declarations are used to manage resources that need to be explicitly disposed of when no longer needed. This feature is still a proposal in TypeScript and is influenced by C#.

typescript
Copy code

```ts
using resource = new DisposableResource();
```

42. await using declarations
    await using declarations extend using to asynchronous contexts, ensuring resources are disposed of when the await completes. This is also a proposal.

typescript
Copy code

```ts
await using resource = new AsyncDisposableResource();
```

43. What strategies for migrating from JavaScript to TypeScript do you know?
    Incremental Migration: Gradually convert JavaScript files to TypeScript by renaming .js files to .ts and addressing type issues incrementally.
    Using any: Start with liberal use of the any type and gradually replace it with more specific types.
    Type Declaration Files: Create .d.ts files for existing JavaScript libraries.
    Strict Mode: Enable TypeScript’s strict mode to catch potential errors early and progressively address them.
    Automated Tools: Use tools like ts-migrate to automate parts of the migration process.
    Testing: Ensure comprehensive testing during the migration to catch regressions and type-related issues.
