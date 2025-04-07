# React (questions prepared)

1. What is `JSX`?
2. What is `strict mode` in React? What is the benefit of strict mode? Why does strict mode render twice in React?
3. What is the difference between `Element` and `Component`?
4. What are `controlled` and `uncontrolled` components?
5. What are `Pure Components`?
6. What are the problems of using `render props` with pure components?
7. Explain the difference between `functional` and `class components`. What are React hooks and how do they differ from class-based components?
8. What are `stateless` components?
9. What are `stateful` components?
10. What is the difference between HTML and React `event handling`? What are `synthetic events` in React?
11. What is `virtual DOM` or `vdom` - https://legacy.reactjs.org/docs/reconciliation.html
12. What is the diffrence between `Real DOM` vs `Virtual DOM` vs `Shadow DOM`?
13. What is React Fiber?
14. What is the difference between `Imperative` and `Declarative` in React?
15. What is the difference between `createElement` and `cloneElement`?
16. What is `Lifting State Up` in React?
17. What is the purpose of `displayName` class property?
18. What are `Higher-Order components`?
19. What is `children prop`?
20. How to apply validation on props in React?
21. Why React uses `className` over class attribute?
22. What are `fragments`?
23. Why we need a `React portals`?
24. Why we need `refs`?
25. У чому різниця між `createRef` і `useRef`?
26. What is the difference between `useState` and `useRef` hook?
27. What is the use of `react-dom` package?
28. What is `ReactDOMServer`?
29. What is the difference between `React` and `ReactDOM`?
30. Why `ReactDOM` is separated from `React`?
31. Do `hooks` replace render props and `higher-order components`?
32. What are `React Mixins`?
33. How JSX prevents `Injection Attacks`?
34. Why should component names start with capital letter?
35. What is Concurrent Rendering?
36. What is the difference between async mode and concurrent mode?
37. How does React batch multiple state updates?
38. Is it possible to prevent automatic batching?
39. What is React hydration?
40. The `rule of hooks`? What conditions must a function meet to be a hook? (use hooks at the top of component (not under conditions or under loops) and if you want to use it with conditions you need to move out it into custom hook)
41. Explain what is happening in this code and in what scenarios it might be useful:
    ```const useHandler = (f) => {
    const ref = React.useRef(f);
    ref.current = f;
    return React.useCallback((...args) => ref.current(...args), []);
    };
    ```
42. How does the `useEffect` hook work? Provide an example.
43. What is `cleanup function` in React hooks?
44. What hooks do you know? (`useState, useEffect, useCallback, useMemo, useContext, useLayoutEffect, useReducer, useRef, useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useSyncExternalStore, useTransition, useOptimistic, useActionState, useFormStatus`)
45. What is the difference between `useLayoutEffect` and `useEffect`, in which cases do you use which?
46. Explain the `Context API` and when you would use it. What are the use cases of `useContext` hook?
47. Are libraries needed for `state management` if there are libraries for caching (`React Query/SWR`) and `React Context`?
48. In what cases do you use `useReducer`? How do you compare `useState` and `useReducer`?
49. Explain how you would handle `global state` in a React application.
50. State manager `Redux`, `Zustand`
51. Flux vs Redux. What are the downsides of Redux compared to Flux?
52. What are the core principles of Redux?
53. What is the difference between mapStateToProps() and mapDispatchToProps()?
54. What are the different ways to write mapDispatchToProps()?
55. What is an `action` in Redux?
56. How to `reset state` in Redux?
57. What is the difference between `React context` and `React Redux`?
58. Why are Redux state functions called `reducers`?
59. What are `Redux selectors` and Why to use them?
60. Did you work with `memoized selectors`? What are they used for?
61. What is `reselect` and how it works?
62. How to make `AJAX request` in Redux?
63. What is the proper way to access `Redux store`?
64. What is the difference between `component` and `container` in React Redux?
65. How do you use `immer` library for state updates?
66. Do you use `redux-thunk` or `redux-saga`? What is redux-thunk? What is redux-saga? What is the difference between them?
67. What are the differences between `call` and `put` in `redux-saga`?
68. How do you optimize a React application’s performance?
69. Explain how memoization works in React (React memo).
70. What is `React lazy` function? And we need `Suspense` component?
71. What is `Code splitting` and what types of code-splitting do we have? [page-based, component-based; but be careful it impact on SEO]
72. You have a task to render a large list (100k + items). How would you accomplish this task?
73. Why we sometimes need a packages like react-virtualized or react-window?
74. Why we sometimes need a pagination?
75. Explain what a `single page app` is and how to make one SEO-friendly.
76. What is `server components`?
77. What is `Optimistic updates`?
78. What is `key` prop and what is the benefit of using it in arrays of elements? What is reconciliation?
79. Can I use `keys` for non-list items?
80. Do we have a component to catch the errors? In which scenarios `ErrorBoundary` do not catch errors? Do we have any other ways to catch the errors? [window.onerror, serialize error + json-stable-stringify]
81. Give an example of React-pattern `Compound components`.
82. What are the drawbacks of MVW pattern
83. What `patterns` from React do you know?
84. How do you maintain design and styling consistency across large React codebases? What approaches or tools do you use to maintain UI unity?
85. How do you structure and organize the components of large React applications? What approaches do you use for logical separation of components, code reuse, and maintainability?
