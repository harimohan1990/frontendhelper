import React from 'react';
import './Csspage.css';

export default function CssPage() {
  return (
    <div className='CssContainer_main'>
      <div className='Csspage_left'>
        <h1>Questions</h1>
        <ul className='css__list'>
          <li>CSS Box Model</li>
          <li>CSS Positions</li>
          <li>CSS Selectors - Combinators</li>
          <li>Difference between Pseudo-class and CSS Pseudo-elements</li>
          <li>CSS Specificity</li>
          <li>Difference among display: inline, display: inline-block, and display: block</li>
          <li>Display: none and visibility: hidden</li>
          <li>Difference between CSS Grid and Flexbox</li>
          <li>How to center a div in CSS when the child div has a given size</li>
        </ul>
      </div>
      <div className='Csspage_right'>
        <h1>Answers</h1>
        <div className='css__answer'>
          <h2>1. CSS Box Model</h2>
          <p>The CSS Box Model describes the rectangular boxes that are generated for elements in the document tree and is a fundamental concept for layout in CSS. It includes content, padding, border, and margin, which together define the element's total size.</p>
        </div>
        <div className='css__answer'>
          <h2>2. CSS Positions</h2>
          <p>CSS positions include static, relative, absolute, fixed, and sticky. Each type controls how an element is placed on the page:</p>
          <ul>
            <li><strong>Static:</strong> The default positioning; elements are positioned according to the normal flow of the document.</li>
            <li><strong>Relative:</strong> Positioned relative to its normal position.</li>
            <li><strong>Absolute:</strong> Positioned relative to the nearest positioned ancestor or the initial containing block.</li>
            <li><strong>Fixed:</strong> Positioned relative to the viewport, and it stays fixed when scrolling.</li>
            <li><strong>Sticky:</strong> A mix of relative and fixed positioning. The element sticks within its parent container as the user scrolls.</li>
          </ul>
        </div>
        <div className='css__answer'>
          <h2>3. CSS Selectors - Combinators</h2>
          <p>CSS combinators define the relationship between two selectors. Common combinators include:</p>
          <ul>
            <li><strong>Descendant Selector (space):</strong> Targets elements that are descendants of a specified element.</li>
            <li><strong>'Child Selector ({'>'}):</strong> Targets elements that are direct children of a specified element.</li>
            <li><strong>Adjacent Sibling Selector (+):</strong> Targets elements that are immediately next to a specified element.</li>
            <li><strong>General Sibling Selector (~):</strong> Targets all elements that are siblings of a specified element.</li>
          </ul>
        </div>
        <div className='css__answer'>
          <h2>4. Difference between Pseudo-class and CSS Pseudo-elements</h2>
          <p><strong>Pseudo-classes:</strong> Apply styles to elements based on their state, such as :hover or :focus.</p>
          <p><strong>Pseudo-elements:</strong> Apply styles to a specific part of an element, such as ::before or ::after.</p>
        </div>
        <div className='css__answer'>
          <h2>5. CSS Specificity</h2>
          <p>CSS specificity determines which styles are applied to an element when multiple selectors could apply. Specificity is calculated based on the type of selectors used: inline styles, IDs, classes, and element selectors, from highest to lowest priority.</p>
        </div>
        <div className='css__answer'>
          <h2>6. Difference among display: inline, display: inline-block, and display: block</h2>
          <p><strong>Display: inline:</strong> Elements do not start on a new line and only take up as much width as necessary.</p>
          <p><strong>Display: inline-block:</strong> Elements do not start on a new line but can have a width and height.</p>
          <p><strong>Display: block:</strong> Elements start on a new line and take up the full width available.</p>
        </div>
        <div className='css__answer'>
          <h2>7. Display: none and visibility: hidden</h2>
          <p><strong>Display: none:</strong> The element is completely removed from the document flow and does not take up any space.</p>
          <p><strong>Visibility: hidden:</strong> The element is not visible but still occupies space in the layout.</p>
        </div>
        <div className='css__answer'>
          <h2>8. Difference between CSS Grid and Flexbox</h2>
          <p><strong>CSS Grid:</strong> A two-dimensional layout system that allows you to control rows and columns independently.</p>
          <p><strong>Flexbox:</strong> A one-dimensional layout system for aligning items in a row or column.</p>
        </div>
        <div className='css__answer'>
          <h2>9. How to center a div in CSS when the child div has a given size</h2>
          <p>You can center a div with a given size using various methods, such as:</p>
          <ul>
            <li><strong>Flexbox:</strong> Set the parent to <code>display: flex;</code> and use <code>justify-content: center;</code> and <code>align-items: center;</code>.</li>
            <li><strong>Grid:</strong> Set the parent to <code>display: grid;</code> and use <code>place-items: center;</code>.</li>
            <li><strong>Margin auto:</strong> Set a fixed width for the child and use <code>margin: 0 auto;</code> for horizontal centering.</li>
            <li><strong>Absolute Positioning:</strong> Use <code>position: absolute;</code> with <code>top: 50%;</code> and <code>left: 50%;</code>, then apply <code>transform: translate(-50%, -50%);</code> to center the child element.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
