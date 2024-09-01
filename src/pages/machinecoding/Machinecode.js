import React from 'react'

import './Machinecode.css'
export default function Machinecode() {
  return (
    <div className='machinecoding__container'>
    <div className='machinecoding__left'>
      <h1>Machine Coding Topics</h1>
      <ul className='machinecoding__list'>
        <li>Dark Theme</li>
        <li>Product Listing with Pagination</li>
        <li>Progress Bar</li>
        <li>Star Rating Component</li>
        <li>Create a Modal</li>
        <li>Create an Image Carousel</li>
        <li>Search with Debouncing</li>
        <li>Nested Folder Structure</li>
        <li>Counter</li>
        <li>Stopwatch</li>
      </ul>
    </div>
    <div className='machinecoding__right'>
      <h1>Descriptions</h1>
      <div className='machinecoding__description'>
        <h2>1. Dark Theme</h2>
        <p>Implement a dark mode feature for your application, allowing users to toggle between light and dark themes. It typically involves using CSS variables or a global state to apply the theme dynamically.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>2. Product Listing with Pagination</h2>
        <p>Create a product listing page that displays a list of products with pagination controls. The user should be able to navigate between pages to view more products.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>3. Progress Bar</h2>
        <p>Design a progress bar component that can visually represent the completion percentage of a task. It should be dynamic and update as the task progresses.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>4. Star Rating Component</h2>
        <p>Build a star rating component where users can rate items (e.g., products or services) by selecting a number of stars. The component should also display the average rating.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>5. Create a Modal</h2>
        <p>Implement a modal component that can display content in a pop-up window. The modal should have an overlay and should be dismissible by clicking outside the modal or pressing the ESC key.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>6. Create an Image Carousel</h2>
        <p>Develop an image carousel that allows users to browse through multiple images. The carousel should include navigation controls like previous/next buttons and indicators.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>7. Search with Debouncing</h2>
        <p>Implement a search bar with debouncing to optimize search operations. Debouncing ensures that the search function is triggered only after the user has stopped typing for a specified delay.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>8. Nested Folder Structure</h2>
        <p>Create a component that can render a nested folder structure, allowing users to expand and collapse folders to view their contents. This is useful for file management systems.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>9. Counter</h2>
        <p>Design a simple counter component with increment and decrement buttons. The counter should update the displayed number when the buttons are clicked.</p>
      </div>
      <div className='machinecoding__description'>
        <h2>10. Stopwatch</h2>
        <p>Build a stopwatch component with start, stop, and reset functionalities. The stopwatch should accurately measure elapsed time and display it in a readable format.</p>
      </div>
    </div>
  </div>
  )
}

