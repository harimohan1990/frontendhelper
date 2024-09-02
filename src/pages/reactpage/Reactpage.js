import React from 'react';
import './Reactpage.css';

export default function Reactpage() {
  return (
    <div className='react-container'>
      <div className='react-left'>
        <h1>Questions</h1>
        <ul className='react-list'>
          <li>React Lifecycle Methods</li>
          <li>Hooks (useState, useEffect, etc.)</li>
          <li>React Context API</li>
          <li>React Router</li>
          <li>Higher-Order Components (HOCs)</li>
          <li>Controlled vs. Uncontrolled Components</li>
          <li>State Management (Redux, Zustand)</li>
          <li>Performance Optimization</li>
          <li>Testing React Components</li>
          <li>Advanced React Topics</li>
          <li>Redux Thunk vs. Redux Saga</li>
        </ul>
      </div>
      
      <div className='react-right'>
        <h1>Answers</h1>

        <div className='react-answer'>
          <h2>1. React Lifecycle Methods</h2>
          <p>React lifecycle methods are special methods that allow you to run code at particular times in the component's lifecycle...</p>

          <h3>Mounting</h3>
          <p>Mounting refers to the process where a component is being created and inserted into the DOM...</p>

          <ul>
            <li><strong>constructor():</strong> The constructor is called first when a component is initialized...</li>
            <li><strong>static getDerivedStateFromProps(props, state):</strong> This method is called right before rendering...</li>
            <li><strong>render():</strong> The render method examines `this.props` and `this.state` and returns React elements...</li>
            <li><strong>componentDidMount():</strong> This method is invoked immediately after the component is mounted...</li>
          </ul>

          <h3>Updating</h3>
          <p>Updating refers to when a component is being re-rendered as a result of changes to props or state...</p>

          <ul>
            <li><strong>static getDerivedStateFromProps(props, state):</strong> This method allows the component to update its state in response to prop changes...</li>
            <li><strong>shouldComponentUpdate(nextProps, nextState):</strong> This method allows you to prevent unnecessary re-renders...</li>
            <li><strong>render():</strong> The render method is called again to determine what should be displayed on the screen...</li>
            <li><strong>getSnapshotBeforeUpdate(prevProps, prevState):</strong> This method is called right before the most recently rendered output is committed to the DOM...</li>
            <li><strong>componentDidUpdate(prevProps, prevState, snapshot):</strong> This method is invoked immediately after an update occurs...</li>
          </ul>

          <h3>Unmounting</h3>
          <p>Unmounting refers to when a component is being removed from the DOM...</p>

          <ul>
            <li><strong>componentWillUnmount():</strong> This method is called right before the component is unmounted and destroyed...</li>
          </ul>

          <h3>Error Handling</h3>
          <p>Error handling methods are called when there is an error during rendering, in a lifecycle method...</p>

          <ul>
            <li><strong>static getDerivedStateFromError(error):</strong> This lifecycle method is invoked after an error has been thrown by a descendant component...</li>
            <li><strong>componentDidCatch(error, info):</strong> This method is called after an error has been thrown by a descendant component...</li>
          </ul>
        </div>

        <div className='react-answer'>
          <h2>2. Hooks (useState, useEffect, etc.)</h2>
          <p>Hooks are functions that let you use state and other React features without writing a class...</p>

          <ul>
            <li><strong>useState:</strong> Manages simple state for the count and input value...</li>
            <li><strong>useEffect:</strong> Demonstrates side effects with a cleanup function...</li>
            <li><strong>useContext:</strong> Retrieves a value from `MyContext`...</li>
            <li><strong>useReducer:</strong> Manages state with a reducer function, demonstrating state transitions...</li>
            <li><strong>useCallback:</strong> Memoizes the increment function to avoid unnecessary re-renders...</li>
            <li><strong>useMemo:</strong> Memoizes the doubledCount value to avoid recalculations...</li>
            <li><strong>useRef:</strong> Demonstrates referencing a DOM element and interacting with it...</li>
            <li><strong>useImperativeHandle:</strong> Customizes the instance value exposed to the parent component via a ref...</li>
            <li><strong>useLayoutEffect:</strong> Logs a message synchronously after all DOM mutations...</li>
            <li><strong>useDebugValue:</strong> Displays a debug value in React DevTools when using a custom hook...</li>
            <li><strong>useDeferredValue:</strong> Defers the `inputValue` to optimize rendering during user input...</li>
            <li><strong>useTransition:</strong> Demonstrates how to handle non-urgent state updates with a loading indicator...</li>
            <li><strong>useId:</strong> Generates a unique ID for form elements...</li>
            <li><strong>useSyncExternalStore:</strong> Syncs a value from an external store and updates the component when the store changes...</li>
            <li><strong>useInsertionEffect:</strong> Similar to `useEffect`, but used for manipulating the DOM immediately before paint, primarily for third-party libraries...</li>
          </ul>
        </div>

        <div className='react-answer'>
          <h2>3. React Context API</h2>
          <p>The React Context API allows you to share values across multiple components without explicitly passing props down through every level of the tree...</p>
        </div>

        <div className='react-answer'>
          <h2>4. React Router</h2>
          <p>React Router is a standard library for routing in React. It allows navigation among views of various components in a React application...</p>
        </div>

        <div className='react-answer'>
          <h2>5. Higher-Order Components (HOCs)</h2>
          <p>Higher-Order Components are functions that take a component and return a new component with additional props or behavior...</p>
        </div>

        <div className='react-answer'>
          <h2>6. Controlled vs. Uncontrolled Components</h2>
          <p>In React, a controlled component is one that derives its value from state and is controlled by React...</p>
        </div>

        <div className='react-answer'>
          <h2>7. Redux Thunk vs. Redux Saga</h2>
          <p><strong>Redux Thunk:</strong> A simple middleware that allows you to write action creators that return a function instead of an action...</p>
          <p><strong>Redux Saga:</strong> A more advanced middleware that uses "sagas," which are generator functions that can pause, yield, and resume...</p>
        </div>

        {/* Other answer sections similar to the above */}
      </div>
    </div>
  );
}
