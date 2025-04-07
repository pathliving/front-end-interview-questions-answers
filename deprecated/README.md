# front-end-interview-questions

Q&amp;A

## CSS

1. Explain the difference between display: none and visibility: hidden.
2. What is the difference between display: inline and display: inline-block? What is the difference between a block level element and an inline element? Can you provide examples of each type of element?
3. Have you ever used a grid system, and if so, what do you prefer? How do you implement a grid layout using CSS Grid?
4. Explain the CSS Box Model. Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
5. modern CSS techniques (Flexbox, Grid)
6. What is the difference between CSS Grid and Flexbox? When would you use one over the other?
7. Critical CSS
8. What is CSS selector specificity and how does it work? Which of these (https://jsfiddle.net/thisman/9o8s2bdk/) selectors has the highest specificity. What color will be applied to the paragraph?
9. What is the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
10. Describe Floats and how they work.
11. Describe z-index and how stacking context is formed.
12. Describe BFC (Block Formatting Context) and how it works.
13. Explain how a browser determines what elements match a CSS selector.
14. Describe pseudo-elements and discuss what they are used for.
15. Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class? What does the pseudo-class :root refer to?
16. What does `* { box-sizing: border-box; }` do? What are its advantages?
17. What is the difference between the "nth-of-type()" and "nth-child()" selectors?
18. What is the difference between a relative, fixed, absolute and statically positioned element?
19. Responsive vs adaptive design strategy?
20. What is the difference between fixed, fluid and responsive layouts?
21. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why? (rotate arrow icon up-down, scale element)
22. How is clearfix css property useful?
23. Can you explain the difference between px, em and rem as they relate to font sizing?
24. What is the difference between 'mobile first' and 'desktop first'
25. CSSOM
26. design tokens - https://css-tricks.com/what-are-design-tokens/

## HTML

1. What does a 'doctype' do?
2. What are data- attributes good for?
3. Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before </body>? Do you know any exceptions?
4. Explain the difference between `<section>` and `<div>`.
5. What is the difference between 'canvas' and 'svg'?
6. Are you familiar with styling SVG?
7. Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
8. What are empty elements in HTML?
9. How would you make an accessible form?
10. Could you list major HTML5 tags?
11. What does an 'optional' closing tag mean?
12. What is the difference between id and class?
13. Semantic HTML
14. Що таке #shadow-root в інспекторі HTML-сторінки? - укр
15. Що таке контекст відображення canvas? Які існують типи контексту для рендерингу двовимірної та тривимірної графіки?

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

## Typescript

1. The primitives (string , number , and boolean)
2. Less Common Primitives (bigint, symbol)
3. Arrays
4. Any
5. Type Annotations on Variables
6. Functions
7. Object types (optional properties, readonly properties, index signatures)
8. Mapped types (build on the index signatures syntax)
9. Tuple types
10. Union types
11. Template Literal types
12. Type Aliases
13. Interfaces
14. Differences Between Type Aliases* and Interfaces\*\* (intersection* or extending**, can’t adding\* or adding new fields to an existing entity**)
15. Type Assertions (as)
16. Null and undefined (Non-null Assertion Operator (Postfix !))
17. Enums
18. typeof type guards (truthiness narrowing)
19. Equality narrowing (===, !==, ==, and !=)
20. The in operator narrowing
21. instanceof narrowing
22. Assignments
23. type predicates
24. Discriminated unions
25. never type
26. Call Signatures
27. Generic Functions (Inference, Constraints)
28. Optional Parameters in Callbacks
29. Function Overloads
30. void type
31. object type
32. unknown type
33. Function type
34. Namespaces vs Modules
35. File declarations (d.ts)
36. Utility types (Awaited<Type>, Partial<Type>, Required<Type>, Readonly<Type>, Record<Keys, Type>, Pick<Type, Keys>, Omit<Type, Keys>, Exclude<UnionType, ExcludedMembers>, Extract<Type, Union>, NonNullable<Type>, Parameters<Type>, ConstructorParameters<Type>, ReturnType<Type>, InstanceType<Type>, NoInfer<Type>, ThisParameterType<Type>, OmitThisParameter<Type>, ThisType<Type>, Intrinsic String Manipulation Types, Uppercase<StringType>, Lowercase<StringType>, Capitalize<StringType>, Uncapitalize<StringType>)
37. Becorators
38. Symbols
39. Triple-Slash Directives
40. Type Inference
41. using declarations
42. await using declarations

## React

1. What are React hooks and how do they differ from class-based components? Explain the difference between functional and class components.
2. How does the useEffect hook work? Provide an example.
3. React hook cleanup function
4. The rule of hooks? (use hooks at the top of component (not under conditions or under loops) and if you want to use it with conditions you need to move out it into custom hook)
5. Hooks (useState, useEffect, useCallback, useMemo, useContext, useLayoutEffect, useReducer, useRef, useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useSyncExternalStore, useTransition, useOptimistic, useActionState, useFormStatus)
6. Explain the Context API and when you would use it.
7. Explain how you would handle global state in a React application.
8. State manager redux, zustand
9. Do you use thunk or saga?
10. flux vs redux
11. How do you optimize a React application’s performance?
12. Explain how memoization works in React.
13. How would you handle API requests and data fetching in a React application?
14. Error handler for components (ErrorBoundary, window.onerror, serialize error + json-stable-stringify)
15. Code splitting (page-based, component-based), but be careful it impact on SEO
16. Abstract Syntax Tree (AST)
17. react-virtualized vs. react-window
18. server components
19. optimistic updates
20. virtual DOM or vdom - https://legacy.reactjs.org/docs/reconciliation.html
21. virtual DOM vs shadow DOM
22. Why we need a react portals?
23. Why we need refs?
24. У чому різниця між createRef і useRef?
25. Чи працював з мемоізованими селекторами (memoized selectors)? Для чого їх використовують і який принцип роботи? - укр
26. Навіщо в списках ключі? Чи можна робити ключами індекси елементів масиву? Коли це виправдано? - укр
27. У чому полягає принцип «підйому стану»? - укр

## General

0. Can you explain what happens when you enter a URL into the browser?
1. Describe the difference between a cookie, sessionStorage and localStorage and IndexedDB.
2. Describe the difference between `<script>`, `<script async>` and `<script defer>`.
3. Describe the process of optimizing a website for performance (e.g. assets/resources, javasript, scripts).
4. Performance (https://nischithbm.medium.com/web-performance-optimizing-the-network-waterfall-8a65df932df6) & PRPL pattern (https://web.dev/apply-instant-loading-with-prpl/) & RAIL model (https://web.dev/rail/)
5. What tools would you use to find a performance bug in your code?
6. Explain the difference between layout, painting and compositing (Rendering: repaint, reflow/relayout, restyle - https://web.dev/articles/rendering-performance , https://performance.shopify.com/blogs/blog/how-layout-position-impacts-three-big-web-performance-levers.)
7. Що таке DOM? - укр
8. why manipulations with DOM is so heavy and expensive? (because repaint, reflow should re-calculate)
9. What are some ways you may improve your website's scrolling performance (throttle, virtualization)?
10. How would you optimize a website's?
11. How do you ensure cross-browser compatibility? (post-css?, polyfills?)
12. What are Web Accessibility standards and how do you implement them?
13. Explain what ARIA and screenreaders are, and how to make a website accessible.
14. Explain how you would implement error handling for network requests.
15. Can you describe some SEO best practices or techniques you have used lately?
16. Can you describe the difference between progressive enhancement and graceful degradation?
17. What is Flash of Unstyled Content? How do you avoid FOUC?
18. Can you explain any common techniques or recent issues solved in regards to front-end security (.env, CORS, CSP headers, HTML sanitizer)?
19. Що таке XSS (Cross-Site Scripting)? - укр
20. What does CORS stand for and what issue does it address?
21. Describe the difference between SSR and CSR. Discuss the pros and cons. Are you familiar with static rendering? Rehydration?
22. What are the differences between Long-Polling, Websockets and Server-Sent Events?
23. What are HTTP methods? List all HTTP methods that you know, and explain them. And HTTP statuses (200, 300, 400, 404, 500).
24. What is a CDN and what is the benefit of using one?
25. What is domain pre-fetching and how does it help with performance (preload)?
26. What is REST?
27. What is the difference between PUT and PATCH methods in REST?
28. graphql vs rest
29. graphql apollo vs relay
30. graphql fragment
31. What is the difference between imperative and declarative programming in JS?
32. List the main things you can do to increase page speed loading?
33. What tools do you know or already use to improve your code?
34. What do you know about "60fps"? How can you achieve it?
35. What is Web Components?
36. Describe your perfect React/Angular/Vue application stack?
37. CSS pre-processors vs CSS-in-JS
38. Can we create mixins in CSS-in-JS?
39. Design/Architecture(Antipatterns)
40. "Code smells” what is it?
41. What do you hear about DRY, KISS, YAGNI?
42. What is SOLID? (solid in react: Але, S - які тут питання можуть бути? Розповісти, що в реакті є компоненти? О - пропси у компонентів, відкритість до змін. L - компоненти можна підміняти, якщо вони реалізовують єдиний інтерфейс. І - точно те саме, декомпозируй, подрібнюй компоненти, інтерфейси, моделі як вважаєш за потрібним. D - це трохи складніше, але так само можно робити щоб компоненти залежали тільки від абстракцій щоб потім можна було їми легко жанглювати. - укр)
43. Dependency inversion, inversion of control
44. SOLID vs GRASP («Code complete»)
45. What is the difference between inheritance and composition? What do you prefer? Why?
46. Experience with node.js
47. What is it middlewar in express.js?
48. Relational vs non-relational DB (mySQL/noSQL, postgress vs mongo, redis)
49. Design patterns
50. GoF (gang of four) patterns
51. MVC, MVP, MVVM etc
52. DDD (Domain Driven Design), Event Sourcing + CQRS approaches (https://dou.ua/forums/topic/33239/)
53. Web application architecture (event-driven architecture/application etc)
54. Onion Architecture, module-based, atomic design, feature-sliced design/FSD (shared - input > entity - priceFilter > features - calculator > widget - sidebar with calculator > pages - widget > app - page)
55. Configuring the ci/cd pipelines (pipelines, deploy, package-lock file, .env)
56. npm i --production (it build project only with dependencies except dev dependency; often use for next.js projects)
57. Для чого потрібен package-lock.json? - укр
58. У чому різниця між npm install і npm ci? - укр
59. How you condact "planning meeting"? how you estimate the tasks? do you use hours or points?
60. Isomorphic application (Definition of Isomorphic React App - In web development, and React in particular. Isomorphic React App is a web app that consists of code that can run on both server and client-side. It usually takes full advantage of performance and SEO friendliness from the server. And combine it with browser capabilities to handle complex user interactions.)
61. centrifuge
62. sentry
63. grafana or kibana
64. CSR, SSR, SSG (https://dou.ua/forums/topic/31720/)
65. DTO & class-validator (https://www.npmjs.com/package/class-validator)
66. monorepo (webpack module federation (micro front-end), nx / lerna, turborepo)
67. BAAS (backend as aservice)
68. BFF (backend for frontend or backend-for-frontend)
69. TOGAF
70. hash (hash function, hashmap) + encryption + encoding
71. normalizing data
72. shadow traffic (https://headerbidding.co/reducing-shadow-traffic-problem/)
73. single source of truth (SSOT)
74. event bus (https://medium.com/nuances-of-programming/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D0%B0-event-bus-%D0%B2-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B5-react-c96e6ae55c78)
75. Розкажіть про патерни Observer, Pub / Sub. Яка між ними різниця? Наведіть приклади реалізації цих патернів у відомих фреймворках / бібліотеках / браузерних API. - укр
76. Jamstack
77. semver
78. statefull vs stateless
79. high cohesion и low coupling (In essence, high cohesion means keeping related parts of the code in one place. At the same time, low coupling consists in the maximum possible separation of unrelated parts of the code base.)
80. OOP vs FP
81. fetch vs xhr
82. abort controller - https://javascript.info/search?query=abort
83. Authorization. JWT (header.payload.signature = To create it, you need to define a header (header) with general information on the token, payload data (payload), such as user id, role, etc. and signatures - https://jwt.io/introduction)
84. TSL/SSL, TCP/UDP, HTTP, DHCP, DNS
85. Web vitals
86. Interceptor
87. Strong profiling and debugging knowledge (chrome dev tools, react dev tools, redux dev tools)
88. Web workers vs Service workers vs Worklets (https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
89. PWA (workbox) https://web.dev/learn/pwa/workbox/ & https://www.npmjs.com/package/next-pwa
90. У якому порядку обробляються призначені для користувача події в DOM (click, mouseover тощо)? FIFO чи LIFO? - укр
91. Які є підходи оптимізації продуктивності вебсторінки? - укр
92. У чому полягає різниця між git merge і git rebase?

## Testing

1. 1.Розкажіть про піраміду тестування. What is the difference between a unit test and a functional/integration test? e2e? - укр
2. What are some of the testing best practices?
3. Functional testing vs TDD (test-driven-development) vs CDT (code-driven-testing)
4. A/B testing

## A11Y

1. Who benefits from accessibility?
2. How would you define inclusive and/or universal design?
3. Can you provide an example? (does not need to be web/tech related)
4. How has your approach to accessibility changed over time?
5. Name some ways responsive/mobile first design can affect accessibility.
6. What are some user experience (UX) concerns to be aware of when using iconography in user interfaces (UI)?
7. What assistive technologies (ATs) are you familiar with (desktop and/or mobile)?
8. What do you feel is your skill level with these AT(s)?
9. What are skip links?
10. What benefit(s) do they provide?
11. What are some of their limitations?
12. What are some of the tools available to test the accessibility of a website or web application?
13. What is WCAG?
14. What are the differences between A, AA, and AAA compliance?
15. How can using plain language benefit the accessibility of a project?
16. Describe instances where one might use a link or button.
17. Describe ways to convey an element or component’s state that aren’t entirely reliant on visuals.
18. How can carousels be problematic for users with disabilities?
19. How would you convince your Manager to allocate funds for an accessibility audit?
20. Describe a situation where a coworker may have been resistant to accessibility or inclusive design best practices.
21. What sort of strategies do you use in situations like these to help educate coworkers?
22. If one is looking to take on a leadership role:
23. Describe the kind of culture around accessibility you would create and how you would go about creating it
24. When there is more accessibility work to be done than the team can handle, how do you prioritize?
25. If a client/stakeholder doesn’t want to pay for accessibility what would you do?
26. !!!!!!!!TECH QUESTIONS IN A11Y BELOW!!!!!
27. What methods can you use to find an element’s accessible name?
28. What is the accessibility tree?
29. Why are rems or ems preferable to pixels for setting type size?
30. Why is it important to allow the viewport to be resized, and/or zoomed?
31. How is the title attribute exposed to assistive technologies?
32. What kind of elements can title attributes be used on?
33. What sort of information is appropriate for use with the title attribute?
34. Provide an example of when you might need to add a description to an element.
35. How would you expose that description programmatically?
36. What is a focus trap, or focus trapping?
37. Describe an instance of when you’d need focus trapping.
38. Describe an instance of when this would be an accessibility barrier.
39. Describe a situation where the tabindex attribute would be useful.
40. Provide an example of when using the tabindex attribute can cause problems.
41. What are landmark regions and how can they be useful?
42. In what situations might you use a toggle button, vs a switch control, vs a checkbox?
43. Describe methods to hide content:
44. From all users.
45. From only screen reader users.
46. From sighted users, but not screen reader users.
47. And why you might do so.
48. Provide examples of common incorrect usage of ARIA attributes.
49. Aside from screen readers, what other assistive technologies can be affected by use of ARIA? How?
50. What is the difference between the following attributes: hidden, aria-hidden="true" and role="presentation" or role="none"?
51. Describe instances where you might need to use aria-live.
52. What values (such as assertive or polite) might you give the attribute in different situations?
53. How would you mark-up an icon font or SVG that was for decorative purposes?
54. Is CSS pseudo content understood by screen readers?
55. What is the purpose of the alt attribute for images?
56. Can you describe the effect of an empty alt, and/or the lack of the attribute, on an image?
57. In what instances might an empty alt or no alt be appropriate?
58. How might alternative text for an image vary, depending on the context the image is used in?
59. Since svgs don’t accept the alt attribute, how can one provide alternative text for these graphics?
60. Do you need to supply an image an alt attribute if used witin a figure with a figcaption?
61. Describe the steps you take in reviewing or auditing a website or application for accessibility?
62. Describe an instance where an automated test would not flag a blatant accessibility error?
63. When should you use or recommend ARIA roles or attributes to solve an accessibility issue?
64. Describe your process for figuring out if an accessibility bug is due to a developer, browser, or assistive technology error?
65. What is the difference between legend, caption and label elements?
66. What are their similarities?
67. Describe the purpose of heading and header elements, and how they are useful in websites and applications.
68. Describe how you’d handle managing keyboard focus within a single page web app (SPA) when changing routes.
69. Name an ARIA attribute that requires either a child/parent relationship or a pairing role.
70. What is your understanding of “accessible name computation” and how it affects modifying the way screen readers announce certain content?
71. What are some issues with modifying normal scrolling behavior? For example: infinite scrolling or scrolljacking.
72. Some ARIA widgets are presently best supported on devices with physical keyboard, rather than mobile/touch interfaces. Are you aware of any widgets that would be described this way, and why?

### Resources:

- [MDN curriculum](https://developer.mozilla.org/en-US/curriculum/)
- [front-end-developer-interview-questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
- [front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)
- [awesome-interview-questions](https://github.com/DopplerHQ/awesome-interview-questions)
- [front-end-interview-questions](https://github.com/wwwebman/front-end-interview-questions)
- [javascript-code-challenges [website]](https://jscodechallenges.vercel.app/challenges/primitives) and [javascript-code-challenges [github]](https://github.com/sadanandpai/javascript-code-challenges)

TODO:

1. add very short hits into [] after every question
2. merge duplicate questions
3. generate answers
4. add links to answers
