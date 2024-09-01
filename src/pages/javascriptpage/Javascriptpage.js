import React from 'react';
import './Javascriptpage.css';

export default function JavascriptPage() {
  return (
    <div className='JsContainer_main'>
      <div className='Jspage_left'>
        <h1>Questions</h1>
        <ul className='js__list'>
          <li>JavaScript Basics</li>
          <li>Closures</li>
          <li>Promises</li>
          <li>Async/Await</li>
          <li>Event Delegation</li>
          <li>Prototypes and Inheritance</li>
          <li>Hoisting</li>
          <li>JavaScript ES6+ Features</li>
          <li>Memory Management</li>
        </ul>
      </div>
      <div className='Jspage_right'>
        <h1>Answers</h1>
        <div className='js__answer'>
          <h2>1. JavaScript Basics</h2>
          <p>JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers. It supports both object-oriented and functional programming paradigms.</p>
        </div>
        <div className='js__answer'>
          <h2>2. Closures</h2>
          <p>A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are useful for data encapsulation and creating private variables.</p>
        </div>
        <div className='js__answer'>
          <h2>3. Promises</h2>
          <p>Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide methods for handling asynchronous results, such as `.then()` and `.catch()`.</p>
        </div>
        <div className='js__answer'>
          <h2>4. Async/Await</h2>
          <p>Async/await is syntactic sugar built on top of Promises, allowing for more readable asynchronous code. `async` functions return a Promise, and `await` pauses execution until the Promise is resolved.</p>
        </div>
        <div className='js__answer'>
          <h2>5. Event Delegation</h2>
          <p>Event delegation is a technique where a single event listener is attached to a parent element to manage events for its child elements. It uses event bubbling to handle events efficiently.</p>
        </div>
        <div className='js__answer'>
          <h2>6. Prototypes and Inheritance</h2>
          <p>JavaScript uses prototypes for inheritance. Objects can inherit properties and methods from other objects through their prototype chain. This enables reusable and modular code.</p>
        </div>
        <div className='js__answer'>
          <h2>7. Hoisting</h2>
          <p>Hoisting is JavaScript's behavior of moving declarations to the top of the current scope during compilation. Variable and function declarations are hoisted, but assignments are not.</p>
        </div>
        <div className='js__answer'>
          <h2>8. JavaScript ES6+ Features</h2>
          <p>ES6+ introduced many new features including arrow functions, classes, template literals, destructuring, spread/rest operators, and more, enhancing JavaScript's functionality and readability.</p>
        </div>
        <div className='js__answer'>
          <h2>9. Memory Management</h2>
          <p>JavaScript manages memory automatically through garbage collection. However, developers need to be aware of memory leaks and optimize their code to ensure efficient memory usage.</p>
        </div>
      </div>
    </div>
  );
}
