React

4. What are `controlled` and `uncontrolled` components?

5. Explain the difference between `functional` and `class components`. What are React hooks and how do they differ from class-based components?

6. What the difference between `createRef` і `useRef`?

7. Explain what is happening in this code and in what scenarios it might be useful:

```js
const useHandler = (f) => {
  const ref = React.useRef(f);
  ref.current = f;
  return React.useCallback((...args) => ref.current(...args), []);
};
```

43. What is `cleanup function` in React hooks?

44. What hooks do you know? (`useState, useEffect, useCallback, useMemo, useContext, useLayoutEffect, useReducer, useRef, useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useSyncExternalStore, useTransition, useOptimistic, useActionState, useFormStatus`)

45. How does the `useDeferredValue` hook work? Provide an example.

46. How does the `useTransition` hook work? Provide an example.

47. How does the `useDebugValue` hook work? Provide an example.

48. How does the `useImperativeHandle` hook work? Provide an example.

49. How does the `useInsertionEffect` hook work? Provide an example.

50. How does the `useSyncExternalStore` hook work? Provide an example.

51. How does the `useOptimistic` hook work? Provide an example.

52. How does the `useActionState` hook work? Provide an example.

53. How does the `useFormStatus` hook work? Provide an example.

54. Explain the `Context API` and when you would use it. What are the use cases of `useContext` hook?

55. Are libraries needed for `state management` if there are libraries for caching (`React Query/SWR`) and `React Context`?

56. In what cases do you use `useReducer`? How do you compare `useState` and `useReducer`?

57. Explain how you would handle `global state` in a React application.

58. State manager `Redux`, `Zustand`

59. Flux vs Redux. What are the downsides of Redux compared to Flux?

60. How to `reset state` in Redux?

61. Did you work with `memoized selectors`? What are they used for?

62. How do you use `immer` library for state updates?

63. How do you optimize a React application’s performance?

64. Explain how memoization works in React (React memo).

65. What is `React lazy` function? And we need `Suspense` component?

66. What is `Code splitting` and what types of code-splitting do we have? [page-based, component-based; but be careful it impact on SEO]

67. You have a task to render a large list (100k + items). How would you accomplish this task?

68. Why we sometimes need a packages like react-virtualized or react-window?

69. Why we sometimes need a pagination?

70. Explain what a `single page app` is and how to make one SEO-friendly.

71. What is `server components`?

72. What is `Optimistic updates`?

73. What is `key` prop and what is the benefit of using it in arrays of elements? What is reconciliation?

74. Can I use `keys` for non-list items?

75. Do we have a component to catch the errors? In which scenarios `ErrorBoundary` do not catch errors? Do we have any other ways to catch the errors? [window.onerror, serialize error + json-stable-stringify]

76. Give an example of React-pattern `Compound components`.

77. What `patterns` from React do you know?

78. How do you maintain design and styling consistency across large React codebases? What approaches or tools do you use to maintain UI unity?

79. How do you structure and organize the components of large React applications? What approaches do you use for logical separation of components, code reuse, and maintainability?

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!! ANSWERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

1. What are controlled and uncontrolled components?
   Controlled Components are components where the form data is handled by the state within the component. The component receives its current value as a prop and notifies changes via callbacks like onChange.

jsx
Copy code

```jsx
function ControlledComponent() {
  const [value, setValue] = React.useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

Uncontrolled Components rely on the DOM to handle the form data. They use a ref to access the form values.

jsx
Copy code

```jsx
function UncontrolledComponent() {
  const inputRef = React.useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input type="text" ref={inputRef} />;
}
```

5. Explain the difference between functional and class components. What are React hooks and how do they differ from class-based components?
   Functional Components are stateless components defined as functions. With the introduction of hooks, functional components can manage state and side effects.

jsx
Copy code

```jsx
function FunctionalComponent() {
  const [state, setState] = React.useState(0);

  return <div>{state}</div>;
}
```

Class Components are stateful components defined as ES6 classes. They have lifecycle methods for managing state and side effects.

jsx
Copy code

```jsx
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: 0 };
  }

  render() {
    return <div>{this.state.state}</div>;
  }
}
```

React Hooks are functions that let you use state and lifecycle features in functional components, avoiding the need for class components.

6. What the difference between createRef і useRef?
   createRef is used in class components to create a ref.

jsx
Copy code

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}
```

useRef is used in functional components and can hold a mutable object that persists for the lifetime of the component.

jsx
Copy code

```jsx
function MyComponent() {
  const myRef = React.useRef(null);

  return <div ref={myRef}></div>;
}
```

7. Explain what is happening in this code and in what scenarios it might be useful:
   js
   Copy code

```jsx
const useHandler = (f) => {
  const ref = React.useRef(f);
  ref.current = f;
  return React.useCallback((...args) => ref.current(...args), []);
};
```

This code defines a custom hook useHandler that accepts a function f and returns a memoized callback. The useRef is used to store the latest version of the function, and React.useCallback ensures the returned function does not change between renders. This can be useful for event handlers to ensure they are not recreated on every render, thus preventing unnecessary re-renders.

43. What is cleanup function in React hooks?
    A cleanup function is a function that React calls to clean up effects. It can be returned from useEffect to handle component unmounting or before re-running the effect.

jsx
Copy code

```jsx
React.useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

44. What hooks do you know?
    useState: Manages state.
    useEffect: Handles side effects.
    useCallback: Returns a memoized callback.
    useMemo: Returns a memoized value.
    useContext: Accesses the context value.
    useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.
    useReducer: Manages complex state logic.
    useRef: Accesses a mutable ref object.
    useDebugValue: Displays a label in React DevTools.
    useDeferredValue: Defers updating a value.
    useId: Generates unique IDs.
    useImperativeHandle: Customizes the instance value exposed when using ref.
    useInsertionEffect: Runs synchronously after all DOM mutations.
    useSyncExternalStore: Subscribes to an external store.
    useTransition: Manages state transitions.
    useOptimistic: Manages optimistic UI updates.
    useActionState: Manages state in action-like flows.
    useFormStatus: Tracks form status.

45. How does the useDeferredValue hook work? Provide an example.
    useDeferredValue allows you to defer updating a value until the main render is completed. It helps prevent blocking the UI during high-priority updates.

jsx
Copy code

```jsx
function SearchComponent({ value }) {
  const deferredValue = React.useDeferredValue(value);

  return <SearchResults query={deferredValue} />;
}
```

46. How does the useTransition hook work? Provide an example.
    useTransition helps manage state transitions, providing a way to show intermediate states while the transition is ongoing.

jsx
Copy code

```jsx
function TransitionComponent() {
  const [isPending, startTransition] = React.useTransition();
  const [state, setState] = React.useState(0);

  const handleClick = () => {
    startTransition(() => {
      setState((prev) => prev + 1);
    });
  };

  return (
    <div>
      {isPending ? "Loading..." : state}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

47. How does the useDebugValue hook work? Provide an example.
    useDebugValue allows you to display a label in React DevTools for custom hooks.

jsx
Copy code

```jsx
function useCustomHook() {
  const [state, setState] = React.useState(0);
  React.useDebugValue(state > 5 ? "High" : "Low");
  return [state, setState];
}
```

48. How does the useImperativeHandle hook work? Provide an example.
    useImperativeHandle customizes the instance value that is exposed when using ref in a parent component.

jsx
Copy code

```jsx
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} />;
});

function ParentComponent() {
  const fancyInputRef = React.useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
```

49. How does the useInsertionEffect hook work? Provide an example.
    useInsertionEffect runs synchronously after all DOM mutations. It can be used for inserting styles.

jsx
Copy code

```jsx
React.useInsertionEffect(() => {
  const style = document.createElement("style");
  style.textContent = ".my-class { color: red; }";
  document.head.appendChild(style);
  return () => {
    document.head.removeChild(style);
  };
}, []);
```

50. How does the useSyncExternalStore hook work? Provide an example.
    useSyncExternalStore subscribes to an external store and ensures the component stays in sync with it.

jsx
Copy code

```jsx
const store = createStore();

function useStoreData() {
  return React.useSyncExternalStore(store.subscribe, store.getState);
}

function Component() {
  const data = useStoreData();
  return <div>{data}</div>;
}
```

51. How does the useOptimistic hook work? Provide an example.
    useOptimistic manages optimistic UI updates, allowing temporary state updates until confirmation from the server.

jsx
Copy code

```jsx
function useOptimistic(initialValue) {
  const [state, setState] = React.useState(initialValue);
  const optimisticUpdate = (value) => {
    const prevState = state;
    setState(value);
    // Assume a promise from a server update
    return new Promise((resolve, reject) => {
      // On success: resolve();
      // On failure: reject(prevState);
    }).catch((prevState) => setState(prevState));
  };
  return [state, optimisticUpdate];
}
```

52. How does the useActionState hook work? Provide an example.
    useActionState is a custom hook concept for managing state in action-like flows, not a built-in React hook.

jsx
Copy code

```jsx
function useActionState() {
  const [state, setState] = React.useState(null);
  const [isRunning, setIsRunning] = React.useState(false);

  const runAction = async (action) => {
    setIsRunning(true);
    try {
      const result = await action();
      setState(result);
    } finally {
      setIsRunning(false);
    }
  };

  return [state, isRunning, runAction];
}
```

53. How does the useFormStatus hook work? Provide an example.
    useFormStatus is a custom hook concept for tracking form status, not a built-in React hook.

jsx
Copy code

```jsx
function useFormStatus() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const submitForm = async (submitAction) => {
    setIsSubmitting(true);
    try {
      await submitAction();
    } finally {
      setIsSubmitting(false);
    }
  };

  return [isSubmitting, submitForm];
}
```

54. Explain the Context API and when you would use it. What are the use cases of useContext hook?
    The Context API is used to share values between components without passing props through every level of the tree. It’s useful for global data like themes, user data, and settings.

jsx
Copy code

```jsx
const MyContext = React.createContext();

function MyProvider({ children }) {
  const value = { data: "context data" };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

function MyComponent() {
  const context = React.useContext(MyContext);
  return <div>{context.data}</div>;
}
```

55. Are libraries needed for state management if there are libraries for caching (React Query/SWR) and React Context?
    Libraries like React Query and SWR handle remote data fetching and caching efficiently, often reducing the need for additional state management libraries. However, for complex state logic, global state, or when specific features like reducers and middleware are required, state management libraries like Redux may still be necessary.

56. In what cases do you use useReducer? How do you compare useState and useReducer?
    useReducer is used for complex state logic or when the next state depends on the previous state. It is similar to Redux but localized within a component.

jsx
Copy code

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

useState is simpler and more straightforward for managing basic state.

jsx
Copy code

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
```

57. Explain how you would handle global state in a React application.
    Global state can be managed using the Context API, along with hooks like useContext to provide and consume state across the application.

jsx
Copy code

```jsx
const GlobalStateContext = React.createContext();

function GlobalStateProvider({ children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {children}
    </GlobalStateContext.Provider>
  );
}

function useGlobalState() {
  return React.useContext(GlobalStateContext);
}
```

Alternatively, libraries like Redux, Zustand, or Jotai can be used for more complex state management.

58. State manager Redux, Zustand
    Redux is a predictable state container for JavaScript apps. It uses a single store, reducers, and actions to manage state.

Zustand is a small, fast state management library for React with minimal boilerplate and easy usage.

jsx
Copy code

```jsx
// Redux example
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Zustand example
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

59. Flux vs Redux. What are the downsides of Redux compared to Flux?
    Flux is an application architecture for building client-side web applications. It uses unidirectional data flow but does not dictate how to manage state.

Redux is a state management library inspired by Flux but provides more structure with a single store, reducers, and middleware.

Downsides of Redux compared to Flux:

Boilerplate: Redux can introduce more boilerplate code.
Complexity: Learning Redux can be more complex due to its additional concepts like middleware, selectors, and thunks/sagas.
Overhead: For simple applications, Redux might be overkill.

60. How to reset state in Redux?
    You can reset the state by defining an action that returns the initial state in your reducer.

jsx
Copy code

```jsx
const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
```

Dispatch the reset action to reset the state.

jsx
Copy code

```jsx
store.dispatch({ type: "reset" });
```

61. Did you work with memoized selectors? What are they used for?
    Yes, memoized selectors are used to derive and cache computed state from the Redux store. Libraries like Reselect provide tools to create memoized selectors, optimizing performance by avoiding unnecessary recalculations.

jsx
Copy code

```jsx
import { createSelector } from "reselect";

const selectItems = (state) => state.items;
const selectFilteredItems = createSelector(
  [selectItems, (state) => state.filter],
  (items, filter) => items.filter((item) => item.includes(filter))
);
```

62. How do you use immer library for state updates?
    Immer allows you to work with immutable state in a more convenient way by using a mutable draft state that gets finalized to an immutable state.

jsx
Copy code

```jsx
import produce from "immer";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return produce(state, (draft) => {
        draft.count += 1;
      });
    case "decrement":
      return produce(state, (draft) => {
        draft.count -= 1;
      });
    default:
      return state;
  }
};
```

63. How do you optimize a React application’s performance?
    Memoization: Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.
    Code Splitting: Use React.lazy and Suspense to load components lazily.
    Virtualization: Render large lists efficiently with libraries like react-window or react-virtualized.
    Avoid Reconciliation Issues: Use unique keys for list items.
    Efficient State Management: Keep state local where possible, avoid deeply nested state, and use selectors.
    Avoid Inline Functions and Objects: Define functions and objects outside of render methods or use hooks to memoize them.
    Optimize Images and Assets: Use optimized formats and lazy loading for images and assets.
    Debounce and Throttle: Debounce or throttle expensive operations like search inputs or scrolling events.

64. Explain how memoization works in React (React memo).
    React.memo is a higher-order component that memoizes a functional component, preventing it from re-rendering unless its props change.

jsx
Copy code

```jsx
const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
```

useMemo memoizes the result of a computation.

jsx
Copy code

```jsx
const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

useCallback memoizes a function, preventing it from being recreated unless its dependencies change.

jsx
Copy code

```jsx
const memoizedCallback = React.useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

65. What is React lazy function? And we need Suspense component?
    React.lazy is used for code-splitting and lazy-loading components. It dynamically imports the component only when it's needed.

jsx
Copy code

```jsx
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

Suspense is used to wrap lazy-loaded components, providing a fallback UI while the component is loading.

jsx
Copy code

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

66. What is Code splitting and what types of code-splitting do we have?
    Code splitting divides the code into smaller chunks that can be loaded on demand, improving initial load time.

Page-based: Split code based on different routes/pages.
Component-based: Split code at the component level.
Library-based: Load libraries dynamically as needed.
Impact on SEO: Be cautious as excessive splitting can affect SEO if not handled correctly.

67. You have a task to render a large list (100k + items). How would you accomplish this task?
    Use virtualization techniques to render only the visible items and a small buffer around them.

jsx
Copy code

```jsx
import { FixedSizeList as List } from "react-window";

const MyList = ({ items }) => (
  <List height={500} itemCount={items.length} itemSize={35} width={300}>
    {({ index, style }) => <div style={style}>{items[index]}</div>}
  </List>
);
```

68. Why we sometimes need a packages like react-virtualized or react-window?
    Packages like react-virtualized or react-window are essential for efficiently rendering large lists by only rendering the visible portion of the list and a small buffer, improving performance and reducing memory usage.

69. Why we sometimes need a pagination?
    Pagination divides large datasets into smaller, manageable chunks, improving performance and user experience by reducing the amount of data loaded and rendered at once.

70. Explain what a single page app is and how to make one SEO-friendly.
    A single page app (SPA) loads a single HTML page and dynamically updates content without refreshing the page. To make an SPA SEO-friendly, use techniques like:

Server-Side Rendering (SSR): Render the initial HTML on the server.
Static Site Generation (SSG): Pre-render pages at build time.
Prerendering: Generate static HTML for each page.
Meta Tags: Use react-helmet to manage meta tags dynamically.

71. What is server components?
    Server components allow parts of a React app to be rendered on the server. They enable faster initial load times and reduce the amount of client-side JavaScript needed.

72. What is Optimistic updates?
    Optimistic updates update the UI before the server confirms the change, providing a faster, more responsive user experience. If the server request fails, the UI can be reverted to the previous state.

73. What is key prop and what is the benefit of using it in arrays of elements? What is reconciliation?
    The key prop uniquely identifies elements in a list, helping React efficiently update and reconcile the DOM by determining which items have changed, added, or removed.

74. Can I use keys for non-list items?
    No, keys are specifically for list items to help React identify and manage elements efficiently during updates.

75. Do we have a component to catch the errors? In which scenarios ErrorBoundary do not catch errors? Do we have any other ways to catch the errors?
    ErrorBoundary catches errors in their child component tree during rendering, lifecycle methods, and constructors.

jsx
Copy code

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

ErrorBoundary does not catch errors in:

Event handlers
Asynchronous code
Server-side rendering
Errors thrown in the error boundary itself
Other ways to catch errors:

window.onerror for global error handling
Serialize error with json-stable-stringify to log error details

76. Give an example of React-pattern Compound components.
    Compound components allow components to communicate implicitly using context, making them flexible and reusable.

jsx
Copy code

```jsx
const TabsContext = React.createContext();

function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div>{children}</div>;
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = React.useContext(TabsContext);

  return <button onClick={() => setActiveIndex(index)}>{children}</button>;
}

function TabPanels({ children }) {
  const { activeIndex } = React.useContext(TabsContext);
  return <div>{children[activeIndex]}</div>;
}

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <div>Panel 1</div>
        <div>Panel 2</div>
      </TabPanels>
    </Tabs>
  );
}
```

77. What patterns from React do you know?
    Higher-Order Components (HOC): Function that takes a component and returns a new component.
    Render Props: Pattern where a prop is a function that returns a React element.
    Controlled Components: Components that manage their state via props.
    Uncontrolled Components: Components that manage their own state via refs.
    Context API: Share state globally without passing props.
    Compound Components: Components that work together using context to share state implicitly.

78. How do you maintain design and styling consistency across large React codebases? What approaches or tools do you use to maintain UI unity?
    CSS-in-JS libraries: Styled-components, Emotion
    Design Systems: Create reusable components and adhere to design principles.
    Component Libraries: Use or create standardized component libraries (e.g., Material-UI, Ant Design).
    Theming: Use Context or libraries to manage themes.
    CSS Modules: Scope styles locally to components.
    Style Guides: Document and enforce design guidelines.

79. How do you structure and organize the components of large React applications? What approaches do you use for logical separation of components, code reuse, and maintainability?
    Feature-Based Structure: Organize by features or modules.
    Component Hierarchy: Separate into presentational and container components.
    Reusability: Create reusable components and hooks.
    Custom Hooks: Extract logic into custom hooks.
    Context: Use context for global state management.
    Folder Structure:
    src/components: Reusable components
    src/containers: Stateful components
    src/hooks: Custom hooks
    src/context: Context providers
    src/services: API calls and business logic
    src/utils: Utility functions
