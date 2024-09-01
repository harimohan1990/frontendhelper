import React from 'react';
import './Htmlpage.css';

export default function Htmlpage() {
  return (
    <div className='Htmlpage'>
      <div className='Htmlpage__left'>
        <h1>Questions</h1>
        <ul className='Htmlpage__list'>
          <li> HTML Block and Inline Elements</li>
          <li> What is &lt;!DOCTYPE&gt;?</li>
          <li> What is ViewPort and why is it used in HTML?</li>
          <li> Semantic Elements in HTML</li>
          <li> HTML5 New Features</li>
          <li> Difference between SVG and Canvas</li>
        </ul>
      </div>
      <div className='Htmlpage__right'>
        <h1>Answers</h1>
        <div className='Htmlpage__answer'>
          <h2>1. HTML Block and Inline Elements</h2>
          <p><strong>Block-level elements:</strong> Occupy the full width of their parent container, starting on a new line and stacking vertically. Examples include &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to &lt;h6&gt;, &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt;.</p>
          <p><strong>Inline elements:</strong> Occupy only as much width as their content requires and do not start on a new line. Examples include &lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;, and &lt;em&gt;.</p>
        </div>
        <div className='Htmlpage__answer'>
          <h2>2. What is &lt;!DOCTYPE&gt;?</h2>
          <p>&lt;!DOCTYPE&gt; is a declaration that specifies the version of HTML or XHTML that the document is using. It tells the web browser how to interpret the content of the page. For HTML5, the declaration is &lt;!DOCTYPE html&gt;.</p>
        </div>
        <div className='Htmlpage__answer'>
          <h2>3. What is ViewPort and why is it used in HTML?</h2>
          <p>The &lt;meta&gt; viewport tag is crucial in responsive web design. It controls how a webpage is displayed on different devices, especially mobile devices. Commonly used as &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;. This sets the viewport width to match the device's width and ensures the page is displayed at its default zoom level.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Responsive Design: Adapts to various screen sizes.</li>
            <li>Improved Usability: Prevents horizontal scrolling and enhances accessibility.</li>
            <li>Better SEO: Improves mobile-friendliness and search engine rankings.</li>
            <li>Consistent Layout: Maintains design integrity across devices.</li>
            <li>Faster Load Times: Reduces the need for additional CSS.</li>
          </ul>
        </div>
        <div className='Htmlpage__answer'>
          <h2>4. Semantic Elements in HTML</h2>
          <p>Semantic elements clearly describe their meaning both to the developer and the browser. Examples include &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt;.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Improves accessibility for assistive technologies.</li>
            <li>Enhances SEO with clearer content structure.</li>
            <li>Leads to cleaner, more maintainable code.</li>
            <li>Promotes consistency and organized HTML structure.</li>
          </ul>
        </div>
        <div className='Htmlpage__answer'>
          <h2>5. HTML5 New Features</h2>
          <ul>
            <li>New Semantic Elements: &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, and &lt;aside&gt;.</li>
            <li>Multimedia Support: Native &lt;video&gt; and &lt;audio&gt; elements.</li>
            <li>Canvas Element: &lt;canvas&gt; for dynamic graphics.</li>
            <li>Form Enhancements: New input types and attributes.</li>
            <li>Local Storage: Web Storage API for local data.</li>
            <li>Geolocation API: Requests user’s geographical location.</li>
            <li>Offline Capabilities: Application Cache (deprecated in favor of service workers).</li>
            <li>Improved Accessibility: ARIA attributes for enhanced accessibility.</li>
          </ul>
        </div>
        <div className='Htmlpage__answer'>
          <h2>6. Difference between SVG and Canvas</h2>
          <p><strong>SVG:</strong> Scalable Vector Graphics, XML-based, resolution-independent, and suitable for static or interactive graphics. Integrates with CSS and JavaScript.</p>
          <p><strong>Canvas:</strong> HTML5 element for pixel-based graphics, ideal for dynamic and real-time graphics like games or complex visualizations. Requires JavaScript for drawing and interaction.</p>
        </div>
      </div>
    </div>
  );
}
