import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

// Import the CSS file
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='HomeContainer_main'>
      <div>
        <Link to="/HtmlInterview">
          <p>Html Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/CssInterview">
          <p>Css Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/JavaScriptInterview">
          <p>JavaScript Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/TypeScriptInterview">
          <p>TypeScript Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/ReactInterview">
          <p>React Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/NextInterview">
          <p>Next.js Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/DSAInterview">
          <p>DSA Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/SystemDesignInterview">
          <p>System Design Interview</p>
        </Link>
      </div>
      <div>
        <Link to="/MachineCodeInterview">
          <p>Machine Code Interview</p>
        </Link>
      </div>
    </div>
  );
}
