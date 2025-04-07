# Javascript

1. What is strict mode? What are some of the `advantages/disadvantages` of using it?
   Strict mode is a way to opt in to a restricted variant of JavaScript, introduced in ECMAScript 5. It eliminates some silent errors, improves performance by enabling optimizations, and prevents certain actions that are likely to be bugs (e.g., using undeclared variables). However, it can be restrictive and might break legacy code.

2. Have you ever used JavaScript templating? If so, what libraries have you used?
   Yes, I have used JavaScript templating. Some popular libraries include Handlebars.js, Mustache.js, and EJS. These libraries help in generating HTML with dynamic data more efficiently.

3. What is the difference between an attribute and a property?
   Attributes are defined in the HTML and represent initial values. Properties are part of the DOM and can change over time. For example, the value attribute of an `<input>` sets the initial value, while the value property reflects the current value.

4. What are the pros and cons of extending built-in JavaScript objects?
   Pros: Can add new functionality or improve existing behavior. Cons: Can lead to conflicts with future ECMAScript versions or other libraries, and can cause unpredictable behavior in code.

5. What is type casting (conversion) in JS?
   Type casting (conversion) refers to converting a value from one type to another, such as converting a string to a number using Number(), parseInt(), or parseFloat().

6. What is type coercion? What are common pitfalls of relying on type coercion in JavaScript code?
   Type coercion is JavaScript's automatic conversion of values from one type to another. Common pitfalls include unexpected results due to implicit conversions, like 0 == '' being true.

7. What are explicit and implicit casting (conversion) of data types in JS?
   Explicit casting involves manually converting a value, like Number('123'). Implicit casting happens automatically, such as when adding a number and a string ('1' + 2 results in '12').

8. What is the difference between == and ===?
   == checks for value equality with type coercion, while === checks for both value and type equality. === is generally preferred to avoid unexpected results from type coercion.

9. Why is it called a Ternary operator, what does the word Ternary indicate?
   It's called a Ternary operator because it takes three operands: a condition, a result if true, and a result if false. Example: condition ? trueResult : falseResult.

10. What do you know about optional chaining operators? What benefits does it bring?
    Optional chaining (?.) allows safe access to deeply nested properties, returning undefined if a reference is null or undefined, thus preventing runtime errors. It simplifies checking for the existence of properties.

11. Can you give an example for destructuring an object or an array?
    ```js
    const person = { name: "John", age: 30 };
    const { name, age } = person;


    const arr = [1, 2, 3];
    const [first, second, third] = arr;
    ```

12. What is Interpolation in JavaScript?
Interpolation is embedding expressions within string literals using template literals. Example: `Hello, ${name}!`.

13. Can you give an example of generating a string with ES6 Template Literals?

    ```js
    const name = "John";
    const message = `Hello, ${name}! Welcome to the team.`;
    ```

14. What are the benefits of using spread syntax and how is it different from rest syntax?
    Spread syntax (...) expands elements of an iterable. Rest syntax collects all remaining elements. Spread is used in arrays and objects, while rest is used in function parameters.

javascript
Copy code

```js
// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Rest
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

15. What is scope?
    Scope determines the visibility of variables. JavaScript has function scope and block scope. Variables declared with var have function scope, while those declared with let and const have block scope.

16. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
    Modifying the global scope can lead to naming conflicts and unpredictable behavior, especially in large codebases or when using third-party libraries.

17. Describe the difference between let, const, and var. Can you change a property of an object defined via const? How you can change this behavior?
    let: Block-scoped, can be updated, but not re-declared in the same scope.
    const: Block-scoped, cannot be updated or re-declared.
    var: Function-scoped, can be updated and re-declared.
    Yes, you can change properties of an object defined with const because const prevents reassigning the variable, but not modifying the object's properties.

javascript
Copy code

```js
const obj = { name: "John" };
obj.name = "Doe"; // Allowed
```

18. What is the difference between a variable that is: null, undefined or undeclared?
    null: Explicitly assigned no value.
    undefined: Declared but not assigned a value.
    undeclared: Not declared at all in the current scope.

19. What language constructions do you use for iterating over object properties and array items?
    Objects: for...in loop, Object.keys(), Object.values(), Object.entries().
    Arrays: for loop, for...of loop, forEach(), map(), filter(), reduce().

20. Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?
    forEach(): Executes a function for each array element, doesn't return a new array.
    map(): Executes a function for each array element, returns a new array with the results. Use map() when you need a new transformed array.
21. What is the difference between while and do-while loops in JavaScript?
    while: Checks the condition before executing the loop body.
    do-while: Executes the loop body at least once before checking the condition.

22. What methods of Array mutate and what methods not mutate arrays (sort, reverse, splice, push, pop, shift, unshift - mutate; reduce, map - not mutate)?
    Mutate: sort(), reverse(), splice(), push(), pop(), shift(), unshift().
    Not Mutate: reduce(), map(), filter(), slice().

23. What does a deep or shallow copy of an object mean? How to do each of them?
    Shallow copy: Copies an object's properties but not nested objects. Use Object.assign() or the spread operator (...).
    Deep copy: Copies an object and all nested objects. Use libraries like lodash (\_.cloneDeep()) or structuredClone().
    javascript
    Copy code

```js
// Shallow copy
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

// Deep copy
const deepCopy = structuredClone(obj);
```

24. What is the difference between the in operator and the hasOwnProperty method?
    in: Checks if a property exists in the object or its prototype chain.
    hasOwnProperty: Checks if a property exists directly on the object. 25. What are object property descriptors? Tell about their practical application.
    Property descriptors define properties' characteristics, such as configurable, enumerable, writable, and value. They allow fine-grained control over object properties. Use Object.defineProperty() to set descriptors.

25. Describe the purpose and principles of working with Map and Set collections.
    Map: Stores key-value pairs, keys can be any type. Maintains insertion order.
    Set: Stores unique values of any type. No duplicates allowed.
26. Describe the purpose and principles of working with WeakMap and WeakSet collections? How are they different from Map and Set collections respectively?
    WeakMap: Keys are objects, not enumerable, does not prevent garbage collection.
    WeakSet: Stores unique objects, not enumerable, does not prevent garbage collection.
27. Explain the difference between mutable and immutable objects.
    Mutable objects: Can be changed after creation.
    Immutable objects: Cannot be changed after creation. Any change creates a new object.
28. What is an example of an immutable object in JavaScript? Name several ways to create an immutable object in JavaScript.
    Example: String is an immutable object.
    To create immutable objects:

Use Object.freeze().
Use libraries like Immutable.js.
Use const for arrays and objects with immutability patterns.
javascript
Copy code

```js
const frozenObject = Object.freeze({ a: 1 });
```

30. What are the pros and cons of immutability?
    Pros: Predictability, easier debugging, safer concurrent programming. Cons: Performance overhead due to copying, increased memory usage.

31. How can you achieve immutability in your own code?
    Use `Object.freeze()` for shallow immutability.
    Use libraries like Immutable.js.
    Avoid direct mutations, use pure functions to return new states.

32. What is the difference between the behavior of `isNaN()` and `Number.isNaN()`?
    `isNaN()`: Converts the value to a number and checks if it's NaN, which can lead to false positives.
    `Number.isNaN()`: Only returns true if the value is exactly NaN.
    javascript
    Copy code

    ```js
    isNaN("hello"); // true
    Number.isNaN("hello"); // false
    ```

33. Why does typeof null return object?
    Due to a historical bug in JavaScript, typeof null returns object. null was intended to represent a null object reference.

34. Tell about the Symbol data type and its practical application.
    Symbol is a unique and immutable primitive value used to create unique object keys. Practical uses include defining non-enumerable properties and avoiding property name collisions.

javascript
Copy code

```js
const sym = Symbol("description");
const obj = { [sym]: "value" };
```

35. What is it iterator and generator?
    Iterator: An object with a `next()` method that returns `{ value, done }` pairs.
    Generator: A function that can pause and resume execution, defined using `function\*` syntax, and returns an iterator.

36. How we know when generator finish yield values?
    When a generator finishes yielding values, the done property in the result object returned by the generator's next() method becomes true.

37. Javascript pure functions
    Pure functions are functions that, given the same inputs, always return the same output and have no side effects. They enhance predictability and ease of testing.

38. How do arrow functions differ from regular functions? What advantage is there for using the arrow syntax for a method in a constructor?
    Arrow functions do not have their own this binding; they inherit this from the enclosing context. This avoids common issues with this in regular functions, making them ideal for methods in constructors and callbacks.

39. What is a typical use case for anonymous functions?
    Anonymous functions are used as arguments to other functions, such as in callbacks or event handlers, where a named function isn't necessary.

40. What is function chaining? Write an example using this approach.
    Function chaining involves calling multiple methods on an object in a single statement, returning the object each time. This allows for a fluent interface.

javascript
Copy code

```js
class Car {
  constructor() {
    this.speed = 0;
  }
  accelerate() {
    this.speed += 10;
    return this;
  }
  brake() {
    this.speed -= 5;
    return this;
  }
}

const car = new Car();
car.accelerate().accelerate().brake(); // Method chaining
```

41. What is IIFE (Immediately Invoked Function Expression)?
    An IIFE is a function that runs as soon as it is defined. It is used to create a new scope and avoid polluting the global scope.

javascript
Copy code

```js
(function () {
  console.log("IIFE runs immediately");
})();
```

42. What is Currying function?
    Currying is the process of transforming a function with multiple arguments into a sequence of functions that each take a single argument.

javascript
Copy code

```js
const add = (a) => (b) => a + b;
const addFive = add(5);
console.log(addFive(3)); // 8
```

43. What is recursion? When is the use of recursion useful in Javascript?
    Recursion is a technique where a function calls itself. It is useful for tasks that can be divided into similar subtasks, such as tree traversal and factorial calculation.

44. What is the definition of a higher-order function?
    A higher-order function is a function that takes other functions as arguments or returns a function as a result. Examples include map(), filter(), and reduce().

45. Explain the difference between: `function Person(){}, var person = Person()`, and `var person = new Person()`?
    `function Person() {}`: Defines a function.
    `var person = Person()`: Invokes the Person function, assigning its return value to person.
    `var person = new Person()`: Creates a new instance of the Person object using the constructor function.
46. Explain the differences on the usage of foo between `function foo() {}` and `var foo = function() {}`?
   ` function foo() {}`: Function declaration, hoisted.
    `var foo = function() {}`: Function expression, not hoisted.
47. Explain the concept of this in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6?
    this refers to the context in which a function is called. In ES6, arrow functions do not have their own this binding; they inherit it from the enclosing lexical context.

javascript
Copy code

```js
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // `this` refers to the Person instance
  }, 1000);
}
```

48. What is the difference between host objects and native objects?
    Host objects: Provided by the environment (e.g., browser-specific objects like window, document).
    Native objects: Defined by the ECMAScript specification (e.g., Object, Array). 49. Explain Function.prototype.bind. What is context lossing, when does it happen, and how can it be prevented?
    bind creates a new function with a specified this value and arguments. Context loss occurs when this is lost, often in callbacks. Using bind can prevent this by explicitly setting the context.

49. Can you explain what Function.call and Function.apply do? What is the notable difference between the two?
    call: Invokes a function with a specified this value and arguments provided individually.
    apply: Invokes a function with a specified this value and arguments provided as an array.
50. What is the problem throttling and debouncing are resolved? What is the core difference between them?
    Throttling limits the number of times a function can execute over time. Debouncing ensures a function is only called once after a specified delay after it stops being invoked. Both address performance issues with repeated function calls.

51. Give an example of a function with memoization. When should this technique be used?
    Memoization caches function results to optimize performance for expensive operations. Use it for functions with repetitive calls and predictable results.

javascript
Copy code

```js
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};
```

53. What are the differences between ES6 class and ES5 function constructors?
    ES6 class: Syntactic sugar over prototypes, clearer and more concise syntax.
    ES5 function constructors: Uses functions and prototype chaining, more verbose.

54. What are closures and how do they work?
    Closures are functions that retain access to their lexical scope even when executed outside that scope. They enable private variables and persistent state.

55. Explain hoisting.
    Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during the compile phase. This means functions and variables can be used before they are declared.

56. What is temporal dead zone?
    The temporal dead zone (TDZ) is the time between entering a block scope and the point where a variable declared with let or const is initialized. Accessing the variable in this period throws a ReferenceError.

57. How does prototypal inheritance work?
    Prototypal inheritance allows objects to inherit properties and methods from other objects. Objects are linked via their prototype, enabling shared behavior.

58. Is it possible to write new `properties / functions` in prototypes of standard classes (Array, Object, etc.)? Why not? In what cases can this be done? How to protect yourself if you need to expand the prototype?
    While possible, modifying prototypes of standard classes is discouraged due to potential conflicts and unpredictable behavior. Use caution and ensure compatibility by checking for existing properties.

59. Explain the difference between synchronous and asynchronous functions.
    Synchronous functions: Block execution until they complete.
    Asynchronous functions: Do not block execution; use callbacks, promises, or `async/await` for handling results.
60. What is event loop?
    The event loop is a mechanism that manages the execution of asynchronous code in JavaScript, ensuring non-blocking behavior by handling events and callbacks in a loop. Resources: `https://www.youtube.com/watch?v=eiC58R16hb8`

61. What is the difference between call stack and task queue?
    Call stack: Manages the execution of function calls.
    Task queue: Holds asynchronous tasks to be executed after the current call stack is empty.
62. What is the difference between Observable and Promise?
    Observable: Represents multiple values over time, can be canceled, and has operators for processing streams.
    Promise: Represents a single value at a future point in time, cannot be canceled.
63. Explain how Promises work in JavaScript (methods all, allSettled, race, any)
    Promises: Represent an eventual completion (or failure) of an asynchronous operation.
    all: Resolves when all promises resolve, or rejects if any promise rejects.
    allSettled: Resolves when all promises settle (either resolve or reject).
    race: `Resolves/rejects` as soon as one promise `resolves/rejects`.
    any: Resolves as soon as any promise resolves, or rejects if all promises reject.
64. What is the extent of your experience with Promises `and/or` their polyfills?
    Promises are fundamental in modern JavaScript for handling asynchronous operations. Polyfills like babel-polyfill can ensure compatibility in older environments.

65. What are the pros and cons of using Promises instead of callbacks?
    Pros: Better readability, easier error handling, chaining for sequential operations. Cons: Slightly more complex syntax for beginners, potential overuse leading to "promise hell."

66. How would you handle errors in `async/await`?
    Use `try...catch` blocks to handle errors in `async/await`:

javascript
Copy code

```js
async function fetchData() {
  try {
    const response = await fetch("url");
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

67. Explain Ajax in as much detail as possible. What are the advantages and disadvantages of using Ajax?
    Ajax (Asynchronous JavaScript and XML) enables asynchronous data retrieval without refreshing the page. Advantages: Improved user experience, partial page updates. Disadvantages: Complexity, browser compatibility issues, can increase server load.

68. Explain how JSONP works (and how it's not really Ajax).
    JSONP (JSON with Padding) allows cross-domain requests by embedding script tags. It is not true Ajax since it uses `<script>` for data fetching, lacking XHR features.

69. What is JSON and how to work with it in JavaScript?
    JSON (JavaScript Object Notation) is a lightweight data-interchange format. Use JSON.stringify() to convert objects to JSON strings, and JSON.parse() to parse JSON strings into objects.

70. What are JSON and XML and how do they differ in use?
    JSON is lightweight, easy to `read/write`, and integrates seamlessly with JavaScript. XML is verbose, supports attributes and complex structures, and is used in legacy systems.

71. Explain event delegation.
    Event delegation involves attaching a single event listener to a parent element to manage events for its children, leveraging event bubbling.

72. Describe event bubbling.
    Event bubbling is the process where an event propagates from the target element up through the DOM hierarchy, triggering handlers on ancestors.

73. Describe event capturing.
    Event capturing (or trickling) is the phase where an event propagates from the root to the target element. It's the opposite of bubbling.

74. What is the difference between `event.target` and `event.currentTarget`?
    `event.target`: The element that triggered the event.
    `event.currentTarget`: The element to which the event handler is attached.
75. What is the difference between `event.preventDefault()` and `event.stopPropagation()`?
    `event.preventDefault()`: Prevents the default action associated with the event.
    `event.stopPropagation()`: Stops the event from bubbling or capturing.
76. EventEmitter js and custom events
    EventEmitter is a pattern for handling custom events. In JavaScript, it is implemented using EventEmitter in `Node.js` or custom event systems in browsers.

77. How does` boxing` and `unboxing` work in JavaScript?
    Boxing wraps primitive values in object wrappers (Number, String, etc.). Unboxing extracts the primitive value from the wrapper.

78. What ways do you know to detect whether an element is in the user's viewport?
    getBoundingClientRect()
    Intersection Observer API
79. When would you use `document.write()`?
    Use `document.write()` for debugging or inserting content during initial page load. It's generally avoided due to potential issues with existing content.

80. Difference between document load event and document DOMContentLoaded event?
    load: Fired when the entire page, including resources, is loaded.
    DOMContentLoaded: Fired when the HTML is fully loaded and parsed, without waiting for resources.
81. Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
    Use the load event to ensure all resources are loaded. Disadvantages include delayed execution. Alternatives include DOMContentLoaded for faster interaction or IntersectionObserver for specific resource tracking.

82. What is the difference between feature detection, feature inference, and using the UA string?
    Feature detection: Checking if a feature exists in the browser (e.g., if ('geolocation' in navigator)).
    Feature inference: Assuming features based on other known features.
    UA string: Using the user agent string to infer browser capabilities, less reliable.
83. Discuss how you might use Object Oriented Programming (OOP) principles when coding with JavaScript. (inheritance, encapsulation, abstraction, polymorphism)
    OOP in JavaScript involves creating classes and objects to model real-world entities. Use inheritance for shared behavior, encapsulation for hiding implementation details, abstraction for defining interfaces, and polymorphism for different implementations.

84. What patterns do you know and successfully use in JavaScript?
    Singleton: Ensures a class has only one instance.
    Module: Encapsulates related functions and variables.
    Observer: Manages subscription and notification of events.
    Factory: Creates objects without specifying the exact class.
85. Implementation of the Class Free OOP pattern
    Refer to observablehq.com for implementation details.

86. Implementation of Async Disposer pattern
    Refer to advancedweb.hu for implementation details.

87. Why you might want to create static class members?
    Static members belong to the class itself, not instances. Use them for utility functions or shared data that doesn't change per instance.

88. What is the purpose of creating an abstract class?
    Abstract classes cannot be instantiated directly. They define common behavior and must be subclassed, ensuring derived classes implement specific methods.

89. Why is the Proxy constructor needed? Give an example of use.
    Proxy is used to intercept and customize operations on objects (e.g., property access, assignment). Example: Logging property accesses.

javascript
Copy code

```js
const handler = {
  get: (target, prop) => {
    console.log(`Property ${prop} accessed`);
    return target[prop];
  },
};
const proxy = new Proxy({}, handler);
proxy.a = 10;
console.log(proxy.a);
```

90. What is an ArrayBuffer? What is the difference between Uint32Array and Float32Array? What is the result of executing the code?
    ArrayBuffer represents a fixed-length raw binary data buffer. Uint32Array stores unsigned 32-bit integers, Float32Array stores 32-bit floating-point numbers. The result of execution depends on the context provided.

91. What tools and techniques do you use debugging JavaScript code?
    Developer tools: Console, breakpoints, step-through debugging.
    Linters: ESLint.
    Testing frameworks: Jest, Mocha.
    Debugging techniques: Logging, `try...catch`.
92. What is Javascript source maps?
    Source maps map compiled code back to its original source code, aiding debugging by showing the original code in developer tools.

93. How can you share code between files?
    `Modules`: import and export (ES6).
    `CommonJS`: require and module.exports.
    `AMD/UMD`: For asynchronous module loading.
94. What is `CJS (Commonjs), AMD/UMD, ESM`? And what is the difference between them?
    CJS (CommonJS): Synchronous module system used in Node.js.
    AMD (Asynchronous Module Definition): Asynchronous module system for browsers.
    UMD (Universal Module Definition): Works with both CJS and AMD.
    ESM (ES Modules): Standardized module system in ES6, uses `import/export`.
95. What is NPM and Yarn? What are the differences?
    NPM: Default package manager for Node.js. Yarn: Alternative package manager, faster installs, and deterministic lock files.

96. Explain synchronous module definition
    Synchronous module definition loads modules synchronously, blocking execution until dependencies are resolved. Used in CJS.

97. How to define and use types in TypeScript?
    Define types using interfaces, type aliases, or enums. Use them to ensure type safety in variables, functions, and classes.

typescript
Copy code

```js
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 30 };
```

98. Tell about Interface Oriented Programming in TS.
    Interface-oriented programming focuses on defining interfaces to establish contracts for objects. It emphasizes the use of interfaces over concrete implementations.

99. What is duck typing in TypeScript? Provide a code example.
    Duck typing allows objects to be used based on their shape rather than explicit type definitions.

typescript
Copy code

```ts
interface CanSwim {
  swim(): void;
}

const swimmer: CanSwim = { swim: () => console.log("Swimming") };
```
