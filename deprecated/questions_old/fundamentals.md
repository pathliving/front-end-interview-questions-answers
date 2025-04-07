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
