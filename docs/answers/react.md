# React (questions prepared)

### 1. What is `JSX`?


Answer
JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the `React.createElement(type, props, ...children)` function, giving us expressiveness of JavaScript along with HTML like template syntax.


### 2. What is `strict mode` in React? What is the benefit of strict mode? Why does strict mode render twice in React?


Answer
`React StrictMode` is a useful component for highlighting potential problems in an application. Just like `<Fragment></Fragment>`, `<StrictMode></StrictMode>` does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for development mode only.


### 3. What is the difference between `Element` and `Component`?


Answer
An `Element` is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap using React.createElement(). Once an element is created, it cannot be mutated.<br/>
Whereas a `component` can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.


### ❗❗❗ 4. What are `controlled` and `uncontrolled` components?


Answer
Placeholder


### 5. What are `Pure Components`?


Answer
`Pure components` are the components which render the same output for the same state and props. In `function components`, you can achieve these pure components through memoized `React.memo()` API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.<br/>
But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.<br/>
In `class components`, the components extending `React.PureComponent` instead of `React.Component` become the pure components. When props or state changes, PureComponent will do a shallow comparison on both props and state by invoking shouldComponentUpdate() lifecycle method.


### 6. What are the problems of using `render props` with pure components?


Answer
If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.


### 7. ❗❗❗ Explain the difference between `functional` and `class components`. What are React hooks and how do they differ from class-based components?


Answer
Placeholder


### 8. What are `stateless` components?


Answer
If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether.


### 9. What are `stateful` components?


Answer
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.


### 10. What is the difference between HTML and React `event handling`? What are `synthetic events` in React?


Answer
**`Event handling`**:<br/>
**a)** In HTML, the event name usually represents in lowercase as a convention `<button onclick="activateLasers()"></button>`. Whereas in React it follows camelCase convention `<button onClick={activateLasers}>`.<br/>
**b)** In HTML, you can return false to prevent default behavior `<a href="#" onclick='console.log("The link was clicked."); return false;' />`. Whereas in React you must call preventDefault() explicitly `function handleClick(event) { event.preventDefault(); console.log("The link was clicked.")}`.<br/>
**`SyntheticEvent`** is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using nativeEvent attribute.



### 11. What is `virtual DOM` or `vdom`


Answer
**The Virtual DOM (VDOM)** is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.<br/>
**The Virtual DOM works** in three simple steps:<br/>
**a)** Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.<br/>
**b)** Then the difference between the previous DOM representation and the new one is calculated.<br/>
**c)** Once the calculations are done, the real DOM will be updated with only the things that have actually changed. Resources: a)https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-virtual-dom b)https://legacy.reactjs.org/docs/reconciliation.html


### 12. What is the diffrence between `Virtual DOM` vs `Shadow DOM`?


Answer
The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.


### 13. What is React Fiber?


Answer
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.


### 14. What is the difference between `Imperative` and `Declarative` in React?


Answer
Imagine a simple UI component, such as a "Like" button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

The imperative way of doing this would be:

```js
if (user.likes()) {
  if (hasBlue()) {
    removeBlue();
    addGrey();
  } else {
    removeGrey();
    addBlue();
  }
}
```

Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

In contrast, the declarative approach would be:

```js
if (this.state.liked) {
  return <blueLike />;
} else {
  return <greyLike />;
}
```

Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.


### 15. What is the difference between `createElement` and `cloneElement`?


Answer
JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.


### 16. What is `Lifting State Up` in React?


Answer
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.


### 17. What is the purpose of `displayName` class property?


Answer
The `displayName` string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.


### 19. What is `children prop`?


Answer
`Children` is a prop that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.


### 21. Why React uses `className` over class attribute?


Answer
The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reversed words, it is recommended to use camelCase whereever applicable in JSX code. The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principle reason why React uses className instead of class. Pass a string as the className prop.


### 22. What are `fragments`?


Answer
It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either or a shorter syntax having empty tag (<></>).


### 23. Why we need a `React portals`?


Answer
Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up. `ReactDOM.createPortal(child, container);` The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.


### 24. Why we need `refs`?


Answer
There are few use cases to go for refs:<br/>
**a)** Managing focus, text selection, or media playback.<br/>
**b)** Triggering imperative animations.<br/>
**c)** Integrating with third-party DOM libraries.


### ❗❗❗ 25. What the difference between `createRef` і `useRef`?


Answer
Placeholder


### 26. What is the difference between `useState` and `useRef` hook?


Answer
**a)** useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes. Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.<br/>
**b)** useState allows us to update the state inside components. While useRef allows referencing DOM elements.


### 27. What is the use of `react-dom` package?


Answer
The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:<br/>
**a)** render()<br/>
**b)** hydrate()<br/>
**c)** unmountComponentAtNode()<br/>
**d)** findDOMNode()<br/>
**e)** createPortal()


### 28. What is `ReactDOMServer`?


Answer
The ReactDOMServer object enables you to render components to static markup (typically used on node server). This object is mainly used for server-side rendering (SSR). The following methods can be used in both the server and browser environments:<br/>
**a)** renderToString()<br/>
**b)** renderToStaticMarkup()<br/>
**c)** renderToPipeableStream. Resources: https://react.dev/reference/react-dom/server


### 29. What is the difference between `React` and `ReactDOM`?


Answer
The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to `elements` and `component classes`. You can think of these as the `isomorphic` or `universal` helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have server-side rendering support with `ReactDOMServer.renderToString()`, `ReactDOMServer.renderToStaticMarkup()` and other methods.


### 30. Why `ReactDOM` is separated from `React`?


Answer
The React team worked on extracting all DOM-related features into a separate library called ReactDOM. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.<br/>
To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of `React` and `React Native`.



### 18. What are `Higher-Order components`?


Answer
A `higher-order component (HOC)` is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature. HOC can be used for many use cases:<br/>
**a)** Code reuse, logic and bootstrap abstraction.<br/>
**b)** Render hijacking.<br/>
**c)** State abstraction and manipulation.<br/>
**d)** Props manipulation.


### 31. Do `hooks` replace render props and `higher-order components`?


Answer
Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.


### 33. How JSX prevents `Injection Attacks`?


Answer
React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.


### 34. Why should component names start with capital letter?


Answer
If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.


### 35. What is `Concurrent Rendering`?


Answer
The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first.


### 36. What is the difference between `async mode` and `concurrent mode`?


Answer
Both refers the same thing. Previously `concurrent Mode` being referred to as `Async Mode` by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.


### 37. How does React batch multiple state updates?


Answer
React prevents component from re-rendering for each and every state update by grouping multiple state updates within an event handler. This strategy improves the application performance and this process known as batching. The older version of React only supported `batching` for browser events whereas React18 supported for asynchronous actions, timeouts and intervals along with native events. This improved version of batching is called `automatic batching`.


### 38. Is it possible to prevent automatic batching?


Answer
Yes, it is possible to prevent automatic batching default behavior. There might be cases where you need to re-render your component after each state update or updating one state depends on another state variable. Considering this situation, React introduced `flushSync` method from `react-dom` API for the usecases where you need to flush state updates to DOM immediately.


### 39. What is React hydration?


Answer
React hydration is used to add client-side JavaScript interactivity to pre-rendered static HTML generated by the server. It is used only for server-side rendering(SSR) to enhance the initial rendering time and make it SEO friendly application. This hydration acts as a bridge to reduce the gap between server side and client-side rendering.
After the page loaded with generated static HTML, React will add application state and interactivity by attaching all event handlers for the respective elements.



### 40. The `rule of hooks`? What conditions must a function meet to be a hook?


Answer
You need to follow two rules in order to use hooks, **a)** Call Hooks only at the top level of your react functions: You should always use hooks at the top level of react function before any early returns. i.e, You shouldn’t call Hooks inside loops, conditions (if you want to use it with conditions you need to move out it into custom hook), or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple re-renders due to useState and useEffect calls.
**b)** Call Hooks from React Functions only: You shouldn’t call Hooks from regular JavaScript functions or class components. Instead, you should call them from either function components or custom hooks.
Resource: https://react.dev/reference/rules/rules-of-hooks


### 41. The `rules of React`?


Answer
Resource: https://react.dev/reference/rules


### 41. ❗❗❗ Explain what is happening in this code and in what scenarios it might be useful:

```js
const useHandler = (f) => {
  const ref = React.useRef(f);
  ref.current = f;
  return React.useCallback((...args) => ref.current(...args), []);
};
```


Answer
Placeholder


### 43. ❗❗❗ What is `cleanup function` in React hooks?


Answer
Placeholder


### 44. ❗❗❗ What hooks do you know? (`useState, useEffect, useCallback, useMemo, useContext, useLayoutEffect, useReducer, useRef, useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useSyncExternalStore, useTransition, useOptimistic, useActionState, useFormStatus`)


Answer
Placeholder


### 42. ❗❗❗ How does the `useDeferredValue` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useTransition` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useDebugValue` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useImperativeHandle` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useInsertionEffect` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useSyncExternalStore` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useOptimistic` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useActionState` hook work? Provide an example.


Answer
Placeholder


### 42. ❗❗❗ How does the `useFormStatus` hook work? Provide an example.


Answer
Placeholder


### 45. What is the difference between `useLayoutEffect` and `useEffect`, in which cases do you use which?


Answer
useEffect and useLayoutEffect are both React hooks that can be used to synchronize a component with an external system, such as a browser API or a third-party library. However, there are some key differences between the two:

**a)** Timing: useEffect runs after the browser has finished painting, while useLayoutEffect runs synchronously before the browser paints. This means that useLayoutEffect can be used to measure and update layout in a way that feels more synchronous to the user.<br/>
**b)** Browser Paint: useEffect allows browser to paint the changes before running the effect, hence it may cause some visual flicker. useLayoutEffect synchronously runs the effect before browser paints and hence it will avoid visual flicker.<br/>
**c)** Execution Order: The order in which multiple useEffect hooks are executed is determined by React and may not be predictable. However, the order in which multiple useLayoutEffect hooks are executed is determined by the order in which they were called.<br/>
**d)** Error handling: useEffect has a built-in mechanism for handling errors that occur during the execution of the effect, so that it does not crash the entire application. useLayoutEffect does not have this mechanism, and errors that occur during the execution of the effect will crash the entire application.

In general, it's recommended to use useEffect as much as possible, because it is more performant and less prone to errors. useLayoutEffect should only be used when you need to measure or update layout, and you can't achieve the same result using useEffect.


### 46. ❗❗❗ Explain the `Context API` and when you would use it. What are the use cases of `useContext` hook?


Answer
Placeholder


### 47. ❗❗❗ Are libraries needed for `state management` if there are libraries for caching (`React Query/SWR`) and `React Context`?


Answer
Placeholder


### 48. ❗❗❗ In what cases do you use `useReducer`? How do you compare `useState` and `useReducer`?


Answer
Placeholder


### 49. ❗❗❗ Explain how you would handle `global state` in a React application.


Answer
Placeholder


### 50. ❗❗❗ State manager `Redux`, `Zustand`


Answer
Placeholder


### 51. ❗❗❗ Flux vs Redux. What are the downsides of Redux compared to Flux?


Answer
`Flux` is an application design paradigm used as a replacement for the more traditional `MVC pattern`. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.
The workflow between dispatcher, stores and views components with distinct inputs and outputs.<br/>
Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:<br/>
**a)** You will need to learn to avoid mutations: Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like redux-immutable-state-invariant, Immutable.js, or instructing your team to write non-mutating code.<br/>
**b)** You're going to have to carefully pick your packages: While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.


### 52. What are the core principles of Redux?


Answer
Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.
Redux follows three fundamental principles:<br/>
**a)** Single source of truth: The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.<br/>
**b)** State is read-only: The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.<br/>
**c)** Changes are made with pure functions: To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.


### 53. What is the difference between mapStateToProps() and mapDispatchToProps()?


Answer
mapStateToProps() is a utility which helps your component get updated state (which is updated by some other components):

```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
```

mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

```js
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};
```

It is recommended to always use the “object shorthand” form for the mapDispatchToProps.<br/>
Redux wraps it in another function that looks like (…args) => dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

```js
const mapDispatchToProps = {
  onTodoClick,
};
```



### 54. What are the different ways to write mapDispatchToProps()?


Answer
There are a few ways of binding action creators to dispatch() in mapDispatchToProps().<br/>
Below are the possible options:

```js
const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(action()),
});
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(action, dispatch),
});
const mapDispatchToProps = { action };
The third option is just a shorthand for the first one.
```



### 55. What is an `action` in Redux?


Answer
Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.<br/>
For example, let's take an action which represents adding a new todo item:

```js
{
  type: ADD_TODO,
  text: 'Add todo item'
}
```



### 56. ❗❗❗ How to `reset state` in Redux?


Answer
Placeholder


### 58. Why are Redux state functions called `reducers`?


Answer
Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could reduce a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.


### 59. What are `Redux selectors` and Why to use them?


Answer
Selectors are functions that take Redux state as an argument and return some data to pass to the component.<br/>
For example, to get user details from the state:

```js
const getUserData = (state) => state.user.data;
```

These selectors have two main benefits,<br/>
**a)** The selector can compute derived data, allowing Redux to store the minimal possible state<br/>
**b)** The selector is not recomputed unless one of its arguments changes


### 60. ❗❗❗ Did you work with `memoized selectors`? What are they used for?


Answer
Placeholder


### 61. What is `reselect` and how it works?


Answer
Let's see the main features of `Reselect` library,<br/>
**a)** Selectors can compute derived data, allowing Redux to store the minimal possible state.<br/>
**b)** Selectors are efficient. A selector is not recomputed unless one of its arguments changes.<br/>
**c)** Selectors are composable. They can be used as input to other selectors.
Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

```js
import { createSelector } from "reselect";

const shopItemsSelector = (state) => state.shop.items;
const taxPercentSelector = (state) => state.shop.taxPercent;

const subtotalSelector = createSelector(shopItemsSelector, (items) =>
  items.reduce((acc, item) => acc + item.value, 0)
);

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
);

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: "apple", value: 1.2 },
      { name: "orange", value: 0.95 },
    ],
  },
};

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }
```



### 57. What is the difference between `React context` and `React Redux`?


Answer
You can use `Context` in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.<br/>
Whereas `Redux` is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.


### 62. How to make `AJAX request` in Redux?


Answer
You can use redux-thunk middleware which allows you to define async actions.<br/>
Let's take an example of fetching specific account as an AJAX call using fetch API:

```js
export function fetchAccount(id) {
  return (dispatch) => {
    dispatch(setLoadingAccountState()); // Show a loading spinner
    fetch(`/account/${id}`, (response) => {
      dispatch(doneFetchingAccount()); // Hide loading spinner
      if (response.status === 200) {
        dispatch(setAccount(response.json)); // Use a normal function to set the received state
      } else {
        dispatch(someError);
      }
    });
  };
}

function setAccount(data) {
  return { type: "SET_Account", data: data };
}
```



### 63. What is the proper way to access `Redux store`?


Answer
The best way to access your store in a component is to use the connect() function, that creates a new component that wraps around your existing one. This pattern is called Higher-Order Components, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.<br/>
Let's take an example of `<FilterLink>` component using connect:

```js
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
```

Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using connect() over accessing the store directly (using context API).

```js
function MyComponent {
  someMethod() {
    doSomethingWith(this.context.store);
  }
}
```



### 64. What is the difference between `component` and `container` in React Redux?


Answer
`Component` is a class or function component that describes the presentational part of your application.<br/>
`Container` is an informal term for a component that is connected to a Redux store. Containers subscribe to Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.


### 65. ❗❗❗ How do you use `immer` library for state updates?


Answer
Placeholder


### 66. Do you use `redux-thunk` or `redux-saga`? What is redux-thunk? What is redux-saga? What is the difference between them?


Answer
`Redux Saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.<br/>
Saga is like a separate thread in your application, that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.<br/>
`Redux Thunk` middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters.
Both `Redux Thunk` and `Redux Saga` take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.


### 67. What are the differences between `call` and `put` in `redux-saga`?


Answer
Both call() and put() are effect creator functions. call() function is used to create effect description, which instructs middleware to call the promise. put() function creates an effect, which instructs middleware to dispatch an action to the store.<br/>
Let's take example of how these effects work for fetching particular user data.

```js
function* fetchUserSaga(action) {
  // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
  // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
  const userData = yield call(api.fetchUser, action.userId);

  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: "FETCH_USER_SUCCESS",
    userData,
  });
}
```



### 68. ❗❗❗ How do you optimize a React application’s performance?


Answer
Placeholder


### 69. ❗❗❗ Explain how memoization works in React (React memo).


Answer
Placeholder


### 70. ❗❗❗ What is `React lazy` function? And we need `Suspense` component?


Answer
The React.lazy function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the OtherComponent when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.

```js
const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```



### 71. ❗❗❗ What is `Code splitting` and what types of code-splitting do we have? (page-based, component-based; but be careful it impact on SEO)


Answer
Placeholder


### 72. ❗❗❗ You have a task to render a large list (100k + items). How would you accomplish this task?


Answer
Placeholder


### 73. ❗❗❗ Why we sometimes need a packages like react-virtualized or react-window?


Answer
Placeholder


### 74. ❗❗❗ Why we sometimes need a pagination?


Answer
Placeholder


### 75. ❗❗❗ Explain what a `single page app` is and how to make one SEO-friendly.


Answer
Placeholder


### 76. ❗❗❗ What is `server components`?


Answer
React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend.


### 77. ❗❗❗ What is `Optimistic updates`?


Answer
Placeholder


### 78. ❗❗❗ What is `key` prop and what is the benefit of using it in arrays of elements? What is reconciliation?


Answer
Placeholder


### 79. ❗❗❗ Can I use `keys` for non-list items?


Answer
Placeholder


### ❗❗❗ 80. Do we have a component to catch the errors? In which scenarios `ErrorBoundary` do not catch errors? Do we have any other ways to catch the errors? (window.onerror, serialize error + json-stable-stringify)


Answer
Placeholder


### ❗❗❗ 81. Give an example of React-pattern `Compound components`.


Answer
Placeholder


### ❗❗❗ 83. What `patterns` from React do you know?


Answer
Placeholder


### ❗❗❗ 84. How do you maintain design and styling consistency across large React codebases? What approaches or tools do you use to maintain UI unity?


Answer
Placeholder


### ❗❗❗ 85. How do you structure and organize the components of large React applications? What approaches do you use for logical separation of components, code reuse, and maintainability?


Answer
Placeholder

````
