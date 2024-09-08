import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

// Import the CSS file
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='HomeContainer_main'>
      <div>
        <Link to="/HtmlInterview">
          <p>Html</p>
        </Link>
      </div>
      <div>
        <Link to="/CssInterview">
          <p>Css </p>
        </Link>
      </div>
      <div>
        <Link to="/JavaScriptInterview">
          <p>JavaScript</p>
        </Link>
      </div>
      <div>
        <Link to="/TypeScriptInterview">
          <p>TypeScript </p>
        </Link>
      </div>
      <div>
        <Link to="/ReactInterview">
          <p>React </p>
        </Link>
      </div>
      <div>
        <Link to="/NextInterview">
          <p>Next.js </p>
        </Link>
      </div>
      <div>
        <Link to="/DSAInterview">
          <p>DSA </p>
        </Link>
      </div>
      <div>
        <Link to="/SystemDesign">
          <p>System Design </p>
        </Link>
      </div>
      <div>
        <Link to="/MachineCodeInterview">
          <p>Machine Code</p>
        </Link>
      </div>
      <div>
        <Link to="/GitInterview">
          <p>Git Command Commans</p>
        </Link>
      </div>
    </div>
  );
}
