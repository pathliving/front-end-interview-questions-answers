## Javascript

1. What are closures and how do they work?
2. How does prototypal inheritance work?
3. Чи можна записувати нові властивості / функції в прототипи стандартних класів (Array, Object тощо)? Чому ні? У яких випадках це робити можна? Як убезпечити себе, якщо потрібно розширити прототип? - укр
4. Describe the difference between let, const, and var.
5. How do arrow functions differ from regular functions? What advantage is there for using the arrow syntax for a method in a constructor?
6. Опишіть призначення і принципи роботи з колекціями Map і Set - укр.
7. Опишіть призначення і принципи роботи з колекціями WeakMap і WeakSet? Чим вони відрізняються від колекцій Map і Set відповідно? - укр
8. Чим відрізняється Observable від Promise?
9. Explain how Promises work in JavaScript (methods all, allSettled, race, any)
10. What is the extent of your experience with Promises and/or their polyfills?
11. What are the pros and cons of using Promises instead of callbacks?
12. How would you handle errors in async/await?
13. Explain event delegation.
14. What is the difference between a variable that is: null, undefined or undeclared?
15. How would you go about checking for any of these states?
16. What language constructions do you use for iterating over object properties and array items?
17. Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?
18. What methods of Array mutate and what methods not mutate arrays (push, pop, shift, unshift - mutate; reduce, map - not mutate)
19. Сan you describe other popular methods for iterating over arrays?
20. What is a typical use case for anonymous functions?
21. IIFE (Immediately Invoked Function Expression)
22. Currying function
23. What is recursion? When is the use of recursion useful in Javascript?
24. Interpolation
25. Інтроспекція (програмування - укр)
26. Explain the concept of 'this' in JavaScript. Can you give an example of one of the ways that working with 'this' has changed in ES6?
27. What is the difference between host objects and native objects?
28. Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?
29. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
30. Can you explain what Function.call and Function.apply do? What is the notable difference between the two?
31. Explain Function.prototype.bind. Що таке втрата контексту, коли відбувається і як їй запобігти? - укр
32. When would you use document.write()?
33. What is the difference between feature detection, feature inference, and using the UA string?
34. Explain "hoisting".
35. What is type coercion? What are common pitfalls of relying on type coercion in JavaScript code?
36. Explain Ajax in as much detail as possible. What are the advantages and disadvantages of using Ajax?
37. Explain how JSONP works (and how it's not really Ajax).
38. Describe event bubbling.
39. Describe event capturing.
40. Have you ever used JavaScript templating? If so, what libraries have you used?
41. What is the difference between an "attribute" and a "property"?
42. What are the pros and cons of extending built-in JavaScript objects?
43. Difference between document load event and document DOMContentLoaded event?
44. Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
45. What is the difference between == and ===?
46. Explain the same-origin policy with regards to JavaScript.
47. Why is it called a Ternary operator, what does the word "Ternary" indicate?
48. What is 'strict mode'? What are some of the advantages/disadvantages of using it?
49. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
50. 21.Що таке область видимості (scope) - укр?
51. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
52. Explain what a single page app is and how to make one SEO-friendly.
53. What tools and techniques do you use debugging JavaScript code?
54. Explain the difference between mutable and immutable objects.
55. What is an example of an immutable object in JavaScript?
56. What are the pros and cons of immutability?
57. How can you achieve immutability in your own code?
58. Explain the difference between synchronous and asynchronous functions.
59. What is event loop?
60. What is the difference between call stack and task queue?
61. Can you change a property of an object defined via const? How you can change this behavior?
62. What are the differences between ES6 class and ES5 function constructors?
63. What is the definition of a higher-order function?
64. Can you give an example for destructuring an object or an array?
65. Can you give an example of generating a string with ES6 Template Literals?
66. Can you give an example of a curry function and why this syntax offers an advantage?
67. What are the benefits of using spread syntax and how is it different from rest syntax?
68. How can you share code between files?
69. Why you might want to create static class members?
70. What is the difference between while and do-while loops in JavaScript?
71. Discuss how you might use Object Oriented Programming (OOP) principles when coding with JavaScript. (inheritance, encapsulation, abstraction, polymorphism)
72. What is the difference between event.target and event.currentTarget?
73. What is the difference between event.preventDefault() and event.stopPropagation()?
74. What do you know about optional chaining operators? What benefits does it bring?
75. What patterns do you know and successfully use in JavaScript?
76. What is the problem throttling and debouncing are resolved? What is the core difference between them?
77. What is it iterator and generator?
78. How we know when generator finish yield values? ("done" key become "true")
79. Javascript is interpreter or compiler-based language?
80. Javascript pure functions
81. CJS (Commonjs), AMD/UMD, ESM - https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm - require vs import
82. garbage collection (“mark-and-sweep”) - https://uk.javascript.info/garbage-collection
83. Copy object or array - https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy. Що означає глибока (deep) та поверхнева (shallow) копія об’єкта? Як зробити кожну з них? - укр
84. Javascript source maps
85. EventEmitter js and custom events
86. 19.Чим відрізняється поведінка isNaN() та Number.isNaN() - укр?
87. Що таке temporal dead zone? - укр
88. Як працює boxing / unboxing у JavaScript? - укр
89. У чому різниця між оператором in і методом hasOwnProperty? - укр
90. Чому typeof null повертає object? - укр
91. Що таке приведення (перетворення) типів у JS? - укр
92. Що таке явне і неявне приведення (перетворення) типів даних у JS? - укр
93. Що таке дескриптори властивостей об’єктів? Розкажіть про їхнє практичне застосування. - укр
94. Назвіть кілька способів створення незмінного об’єкта в JavaScript. - укр
95. Навіщо потрібен конструктор Proxy? Наведіть приклад використання. - укр
96. Що таке ArrayBuffer? У чому різниця між Uint32Array і Float32Array? Який результат виконання коду? - укр
97. Розкажіть про тип даних Symbol і його практичне застосування. - укр
98. Наведіть приклад функції з мемоізацією. Коли варто застосовувати цю техніку? - укр
99. Що таке чейнінг функцій? Напишіть приклад з використанням цього підходу. - укр
