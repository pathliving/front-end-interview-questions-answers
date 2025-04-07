# Fundamentals (questions prepared)

1. Can you explain what happens when you `enter a URL into the browser`?
2. Describe the difference between a `cookie`, `sessionStorage`, `localStorage` and `IndexedDB`.
3. Describe the difference between `<script>`, `<script async>` and `<script defer>`.
4. Describe the process of optimizing a website for performance (e.g. assets/resources, javasript, scripts).
5. What tools would you use to find a performance bug in your code?
6. What are the approaches to optimizing the performance of a web page? - https://nischithbm.medium.com/web-performance-optimizing-the-network-waterfall-8a65df932df6
7. What is `PRPL pattern` (https://web.dev/apply-instant-loading-with-prpl/) & `RAIL model` (https://web.dev/rail/)
8. Explain the difference between `layout`, `painting` and `compositing` (Rendering: repaint, reflow/relayout, restyle - https://web.dev/articles/rendering-performance , https://performance.shopify.com/blogs/blog/how-layout-position-impacts-three-big-web-performance-levers.)
9. What are the main metrics that measure site performance?
10. What do you know about Core Web Vitals?
11. What is the difference between `laboratory` and `field measurements` of performance?
12. What is `Cumulative Layout Shift` and how to improve its value?
13. How do you implement `lazy loading` for images and other resources to optimize loading time?
14. Are you familiar with drawing up a `performance budget`? How do you understand this concept?
15. What is `DOM`?
16. why manipulations with `DOM` is so heavy and expensive? (because repaint, reflow should re-calculate)
17. What are some ways you may improve your website's `scrolling performance` (throttle, virtualization)?
18. What is Flash of Unstyled Content? How do you avoid FOUC?
19. In what order are user-defined events processed in the DOM (click, mouseover, etc.)? FIFO or LIFO?
20. What is a CDN and what is the benefit of using one?
21. What is domain pre-fetching and how does it help with performance (preload)?
22. List the main things you can do to increase page speed loading?
23. What do you know about ` 60fps`` Ho ` can you achieve it?
24. What is requestAnimationFrame?
25. How does the browser determine if we can communicate between tabs?
26. Web workers vs Service workers vs Worklets (https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
27. PWA (workbox) https://web.dev/learn/pwa/workbox/ & https://www.npmjs.com/package/next-pwa
28. Can you describe some `SEO best practices` or techniques you have used lately?
29. What is microformats?
30. What is SEO? What should a developer pay attention to in order to ensure good SEO performance in the future?
31. Can you describe the difference between `progressive enhancement` and `graceful degradation`?
32. Describe the difference between SSR and CSR. Discuss the pros and cons. Are you familiar with static rendering? Rehydration?
33. What are Web `Accessibility` standards and how do you implement them?
34. Explain what `ARIA` and screenreaders are, and how to make a website accessible.
35. What are `HTTP methods` (GET, POST, PUT, DELETE)? List all HTTP methods that you know, and explain them. And `HTTP statuses` (200, 300, 400, 404, 500).
36. What is `HTTP` and `HTTPS`, and what is the diffrence between them?
37. `TLS/SSL`, `TCP/UDP`, `HTTP`, `DHCP`, `DNS`
38. Interceptor
39. Explain how you would implement error handling for network requests.
40. What is `REST`?
41. What is the difference between `PUT` and `PATCH` methods in `REST`?
42. What the diffrence between `GraphQL` vs `REST`?
43. What the diffrence between `GraphQL Apollo` vs `GraphQL Relay`?
44. What is `GraphQL fragment`?
45. What are the differences between `Websockets`, `Long-Polling` and `Server-Sent Events`?
46. What is `fetch` vs `xhr`, and what is the difference?
47. What is `abort controller`? - https://javascript.info/search?query=abort
48. What is `BAAS` (backend as aservice)?
49. What is `BFF` (backend for frontend or backend-for-frontend)?
50. Can you explain any common techniques or recent issues solved in regards to `front-end security` (.env, CORS, CSP headers, HTML sanitizer)?
51. How to manage the `secrets` in your project?
52. What is `Cross-Site Scripting (XSS)` and `Cross-Site Request Forgery (CSRF)` attacks, and ways to protects from them.
53. What does `CORS` stand for and what issue does it address?
54. Describe your perfect `React application stack`?
55. What you choose `CSS pre-processors` or `CSS-in-JS`, and why?
56. Can we create `mixins` in `CSS-in-JS`?
57. What is `Isomorphic application` (Definition of Isomorphic React App - In web development, and React in particular. Isomorphic React App is a web app that consists of code that can run on both server and client-side. It usually takes full advantage of performance and SEO friendliness from the server. And combine it with browser capabilities to handle complex user interactions.)
58. What is `centrifuge`?
59. What is `sentry`?
60. What is `grafana` and `kibana`?
61. What is `DTO` and `class-validator` (https://www.npmjs.com/package/class-validator)?
62. What are `signals`, how are they implemented in different frameworks?
63. What is `Web Components`?
64. What is it `middlewar` in `Express.js`?
65. `Relational` vs `non-relational DB` (mySQL/noSQL, postgress vs mongo, redis)
66. Strong profiling and debugging knowledge (chrome dev tools, react dev tools, redux dev tools)
67. Abstract Syntax Tree (AST)
68. Authorization. JWT (header.payload.signature = To create it, you need to define a header (header) with general information on the token, payload data (payload), such as user id, role, etc. and signatures - https://jwt.io/introduction)
69. `Design patterns`
70. `GoF` (gang of four) patterns
71. `MVC`, `MVP`, `MVVM` etc
72. `DDD` (Domain Driven Design), `Event Sourcing` + `CQRS` approaches (https://dou.ua/forums/topic/33239/)
73. Web application `architecture` (event-driven architecture/application etc)
74. `Onion Architecture`, module-based, atomic design, feature-sliced design/FSD (shared - input > entity - priceFilter > features - calculator > widget - sidebar with calculator > pages - widget > app - page)
75. What is `TOGAF`?
76. Describe the Design/Architecture (`Antipatterns`)?
77. What is `Code smells`?
78. What is `DRY`, `KISS`, `YAGNI`?
79. What is `SOLID`? (solid in react: But, S - what questions can there be? To tell that there are components in react? O - props in components, openness to changes. L - components can be replaced if they implement a single interface. And - exactly the same , decompose, shred components, interfaces, models as you see fit. D is a little more complicated, but it is also possible to make components depend only on abstractions so that you can easily juggle them.)
80. `Dependency inversion` vs `inversion of control`
81. `SOLID` vs `GRASP` («Code complete»)
82. What is the difference between `inheritance` and `composition`? What do you prefer? Why?
83. What is `CSR`, `SSR`, `SSG`, and what the difference? (https://dou.ua/forums/topic/31720/)
84. What is `event bus`? - (https://medium.com/nuances-of-programming/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D0%B0-event-bus-%D0%B2-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B5-react-c96e6ae55c78)
85. Tell us about `Observer`, `Pub / Sub patterns`. What is the difference between them? Give examples of the implementation of these patterns in known frameworks / libraries / browser APIs.
86. What is `introspection`? What is the difference between `introspection` and `reflection`? - https://en.wikipedia.org/wiki/Type_introspection
87. `monorepo` (webpack module federation (micro front-end), nx / lerna, turborepo)
88. What are the advantages/disadvantages of `monorepositories` vs using `different repositories`?
89. What is `microservice architecture` of Front-end App and its advantages compared to monolithic architecture?
90. How would you design a system for high availability and scalability?
91. What are the strategies for scaling web applications?
92. What design patterns do you know and where to apply them?
93. What architectural patterns of web applications were used and what are their advantages?
94. How should you develop scalable and high-performance front-end systems?
95. How to maintain a balance between ready-made solutions and development of own solutions in projects? How should decisions be made about the choice?
96. How you condact `planning meeting`? how you estimate the tasks? do you use hours or points?
97. Configuring the `ci/cd pipelines` (pipelines, deploy, package-lock file, .env)
98. `npm i --production` (it build project only with dependencies except dev dependency; often use for next.js projects)
99. What is `package-lock.json` for?
100. What is the difference between `npm install` and `npm ci`?
101. What tools do you know or already use to improve your code?
102. What is `semver`?
103. What is the difference between git merge and git rebase?
104. What is git flow in a few words?
105. How do you ensure `cross-browser compatibility`? (post-css?, polyfills?)
106. What is `hash` (`hash function`, `hashmap`) + `encryption` + `encoding`?
107. What is `normalizing data`, and how we can do it?
108. What is `shadow traffic` (https://headerbidding.co/reducing-shadow-traffic-problem/)
109. What is `single source of truth (SSOT)`?
110. What is `Jamstack`?
111. What is `statefull` vs `stateless`?
112. `high cohesion` и `low coupling` (In essence, high cohesion means keeping related parts of the code in one place. At the same time, low coupling consists in the maximum possible separation of unrelated parts of the code base.)
113. `OOP` vs `FP`
114. Tell us about `functional programming`.
115. What is the difference between `imperative` and `declarative` programming in JS?
