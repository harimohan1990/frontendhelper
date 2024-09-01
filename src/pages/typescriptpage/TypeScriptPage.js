import React from 'react'

import './TypeScript.css'
const faqs = [
  {
    question: "What is TypeScript?",
    answer: "TypeScript is a statically typed superset of JavaScript that adds optional types. It helps in catching errors early during development and provides a better tooling experience."
  },
  {
    question: "What are the key benefits of using TypeScript?",
    answer: "The key benefits include early error detection, enhanced IDE support, better refactoring capabilities, and the ability to use modern JavaScript features with backward compatibility."
  },
  {
    question: "What is a TypeScript interface?",
    answer: "An interface in TypeScript is a way to define the structure of an object. It can be used to enforce a certain shape on an object, describe the shape of classes, and define function signatures."
  },
  {
    question: "What is the difference between `interface` and `type` in TypeScript?",
    answer: "Both `interface` and `type` can be used to define types in TypeScript. Interfaces are best for defining object shapes and can be extended or merged, while `type` can represent any type including primitive types, union types, and intersections."
  },
  {
    question: "How does TypeScript handle null and undefined?",
    answer: "TypeScript has strict null checks to prevent errors caused by null or undefined values. By default, `null` and `undefined` are not assignable to other types unless explicitly specified."
  },
  {
    question: "What are generics in TypeScript?",
    answer: "Generics are a way to create reusable components or functions that can work with any data type. They provide a way to enforce type safety while allowing for flexible code."
  },
  {
    question: "What is the purpose of the `readonly` modifier in TypeScript?",
    answer: "`readonly` is used to make properties of an object immutable. Once a property is marked as `readonly`, its value cannot be changed after initialization."
  },
  {
    question: "Can you explain TypeScript's type inference?",
    answer: "TypeScript's type inference automatically determines the type of a variable or function return type based on its value or structure, which helps in reducing the need for explicit type annotations."
  },
  {
    question: "What are TypeScript decorators?",
    answer: "Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. They are used to modify or extend the behavior of these elements."
  },
];
export default function TypeScriptPage() {
  return (
    <div className='TsContainer_main'>
    <div className='Tspage_left'>
      <h1>Questions</h1>
      <ul className='ts__list'>
        {faqs.map((faq, index) => (
          <li key={index}>{faq.question}</li>
        ))}
      </ul>
    </div>
    <div className='Tspage_right'>
      <h1>Answers</h1>
      {faqs.map((faq, index) => (
        <div key={index} className='ts__answer'>
          <h2>{index + 1}. {faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
  )
}


