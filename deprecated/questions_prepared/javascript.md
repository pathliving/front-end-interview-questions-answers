# Javascript (questions prepared)

1. What is `strict mode`? What are some of the advantages/disadvantages of using it?
2. Have you ever used JavaScript `templating`? If so, what libraries have you used?
3. What is the difference between an `attribute` and a `property`?
4. What are the pros and cons of extending built-in JavaScript objects?
5. What is `type casting (conversion)` in JS?
6. What is type `coercion`? What are common pitfalls of relying on type coercion in JavaScript code?
7. What are `explicit` and `implicit casting` (conversion) of data types in JS?
8. What is the difference between `==` and `===`?
9. Why is it called a `Ternary operator`, what does the word Ternary indicate?
10. What do you know about `optional chaining` operators? What benefits does it bring?
11. Can you give an example for `destructuring` an object or an array?
12. 146. What is `Interpolation` in Javascript?
13. Can you give an example of generating a string with ES6 `Template Literals`?
14. What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
15. What is `scope`?
16. Why is it, in general, a good idea to leave the `global scope` of a website as-is and never touch it?
17. Describe the difference between `let`, `const`, and `var`. Can you change a property of an object defined via const? How you can change this behavior?
18. What is the difference between a variable that is: `null`, `undefined` or `undeclared`?
19. What language constructions do you use for iterating over object properties and array items?
20. Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
21. What is the difference between `while` and `do-while` loops in JavaScript?
22. What methods of Array `mutate` and what methods `not mutate arrays` (`push`, `pop`, `shift`, `unshift` - mutate; `reduce`, `map` - not mutate)
23. `Copy object or array` - https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy. What does a `deep` or `shallow copy` of an object mean? How to do each of them?
24. What is the difference between the `in` operator and the `hasOwnProperty` method?
25. What are `object property descriptors`? Tell about their practical application.
26. Describe the purpose and principles of working with `Map` and `Set` collections.
27. Describe the purpose and principles of working with `WeakMap` and `WeakSet` collections? How are they different from `Map` and `Set` collections respectively?
28. Explain the difference between `mutable` and `immutable objects`.
29. What is an example of an `immutable object` in JavaScript? Name several ways to create an `immutable object` in JavaScript.
30. What are the pros and cons of `immutability`?
31. How can you achieve `immutability` in your own code?
32. What is the difference between the behavior of `isNaN()` and `Number.isNaN()`?
33. Why does `typeof null` return object?
34. Tell about the `Symbol` data type and its practical application.
35. What is it `iterator` and `generator`?
36. How we know when generator finish `yield` values? ("done" key become "true")
37. Javascript `pure functions`
38. How do `arrow functions` differ from regular functions? What advantage is there for using the arrow syntax for a method in a constructor?
39. What is a typical use case for `anonymous functions`?
40. What is `function chaining`? Write an example using this approach.
41. What is `IIFE` (Immediately Invoked Function Expression)?
42. What is `Currying function`?
43. What is `recursion`? When is the use of recursion useful in Javascript?
44. What is the definition of a `higher-order function`?
45. Explain the difference between: `function Person(){}, var person = Person(), and var person = new Person()`?
46. Explain the differences on the usage of foo between `function foo() {}` and `var foo = function() {}`?
47. Explain the concept of `this` in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6?
48. What is the difference between `host objects` and `native objects`?
49. Explain `Function.prototype.bind`. What is `context lossing`, when does it happen, and how can it be prevented?
50. Can you explain what `Function.call` and `Function.apply` do? What is the notable difference between the two?
51. What is the problem `throttling` and `debouncing` are resolved? What is the core difference between them?
52. Give an example of a function with `memoization`. When should this technique be used?
53. What are the differences between `ES6 class` and `ES5 function constructors`?
54. What are `closures` and how do they work?
55. Explain `hoisting`.
56. What is `temporal dead zone`?
57. How does `prototypal inheritance` work?
58. Is it possible to write `new properties / functions in prototypes` of standard classes (Array, Object, etc.)? Why not? In what cases can this be done? How to protect yourself if you need to expand the prototype?
59. Explain the difference between `synchronous` and `asynchronous functions`.
60. What is `event loop`?
61. What is the difference between `call stack` and `task queue`?
62. What is the difference between `Observable` and `Promise`?
63. Explain how `Promises` work in JavaScript (methods all, allSettled, race, any)
64. What is the extent of your experience with Promises and/or their polyfills?
65. What are the pros and cons of using `Promises instead of callbacks`?
66. How would you handle errors in `async/await`?
67. Explain `Ajax` in as much detail as possible. What are the advantages and disadvantages of using Ajax?
68. Explain how `JSONP` works (and how it's not really Ajax).
69. What is `JSON` and how to work with it in JavaScript?
70. What are `JSON` and `XML` and how do they differ in use?
71. Explain `event delegation`.
72. Describe `event bubbling`.
73. Describe `event capturing`.
74. What is the difference between `event.target` and `event.currentTarget`?
75. What is the difference between `event.preventDefault()` and `event.stopPropagation()`?
76. `EventEmitter` js and custom events
77. How does `boxing / unboxing` work in JavaScript?
78. What ways do you know to detect whether an element is in the `user's viewport`?
79. When would you use `document.write()`?
80. Difference between document `load event` and document `DOMContentLoaded` event?
81. Why would you use something like the `load event`? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
82. What is the difference between `feature detection`, `feature inference`, and using the UA string?
83. Discuss how you might use `Object Oriented Programming (OOP)` principles when coding with JavaScript. (inheritance, encapsulation, abstraction, polymorphism)
84. What `patterns` do you know and successfully use in JavaScript?
85. Implementation of the `Class Free OOP pattern` (HTTPs://observablehq.com/@bratter/class-free-oop).
86. Implementation of `Async Disposer pattern` (HTTPs://advancedweb.hu/what-is-the-async-disposer-pattern-in-javascript).
87. Why you might want to create static class members?
88. What is the purpose of creating an `abstract class`?
89. Why is the `Proxy constructor` needed? Give an example of use.
90. What is an `ArrayBuffer`? What is the difference between `Uint32Array` and `Float32Array`? What is the result of executing the code?
91. What tools and techniques do you use `debugging JavaScript code`?
92. What is Javascript `source maps`?
93. How can you share code between files?
94. What is `CJS` (Commonjs), `AMD/UMD`, `ESM` - https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm. And what is the difference between require vs import?
95. How works `Garbage Collection` in Javascript [“mark-and-sweep”] - https://uk.javascript.info/garbage-collection
96. Explain the same-origin policy with regards to JavaScript.
97. Javascript is `interpreter` or `compiler-based` language?
98. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
