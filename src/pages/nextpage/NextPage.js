import React from 'react'

import './Nextpage.css'
export default function NextPage() {
  return (
    <div className='nextjs__container'>
      <div className='nextjs__left'>
        <h1>Next.js Questions</h1>
        <ul className='nextjs__list'>
          <li>What is Next.js?</li>
          <li>What are the benefits of using Next.js?</li>
          <li>What is the difference between Next.js and React?</li>
          <li>What is server-side rendering (SSR) in Next.js?</li>
          <li>How does static site generation (SSG) work in Next.js?</li>
          <li>What is the difference between SSR and SSG in Next.js?</li>
          <li>How do you implement dynamic routing in Next.js?</li>
          <li>What is API routing in Next.js?</li>
          <li>How to use environment variables in Next.js?</li>
        </ul>
      </div>
      <div className='nextjs__right'>
        <h1>Answers</h1>
        <div className='nextjs__answer'>
          <h2>1. What is Next.js?</h2>
          <p>Next.js is a React-based framework that enables server-side rendering and static site generation. It offers an opinionated approach to building web applications with features like automatic code splitting, client-side routing, and integrated API routes.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>2. What are the benefits of using Next.js?</h2>
          <p>Next.js offers several benefits, including improved SEO through server-side rendering, faster page load times via static site generation, and a built-in API layer for creating serverless functions.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>3. What is the difference between Next.js and React?</h2>
          <p>React is a JavaScript library for building user interfaces, while Next.js is a framework built on top of React that provides additional features like server-side rendering, static site generation, and API routing.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>4. What is server-side rendering (SSR) in Next.js?</h2>
          <p>Server-side rendering (SSR) in Next.js involves rendering a page on the server for each request, allowing for dynamic content generation and improved SEO compared to client-side rendering.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>5. How does static site generation (SSG) work in Next.js?</h2>
          <p>Static site generation (SSG) in Next.js involves pre-rendering pages at build time, which are then served as static files. This approach improves performance and is suitable for pages that don’t change frequently.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>6. What is the difference between SSR and SSG in Next.js?</h2>
          <p>SSR generates pages dynamically on each request, suitable for content that changes frequently. SSG pre-generates pages at build time, which are served as static files, ideal for content that doesn't change often.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>7. How do you implement dynamic routing in Next.js?</h2>
          <p>Dynamic routing in Next.js is implemented by creating pages with filenames enclosed in square brackets (e.g., `[id].js`). These files act as templates for dynamic URLs.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>8. What is API routing in Next.js?</h2>
          <p>API routing in Next.js allows you to create API endpoints within your Next.js application. These endpoints are created by adding JavaScript files to the `pages/api` directory.</p>
        </div>
        <div className='nextjs__answer'>
          <h2>9. How to use environment variables in Next.js?</h2>
          <p>Environment variables in Next.js are configured by creating a `.env` file at the root of the project. Variables can be accessed using `process.env.VARIABLE_NAME` and must be prefixed with `NEXT_PUBLIC_` to be available in the browser.</p>
        </div>
      </div>
      </div>
  )
}
