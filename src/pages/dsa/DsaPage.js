import React from 'react'

import './DsaPage.css'
export default function DsaPage() {
  return (
    <div className='dsa__container'>
    <div className='dsa__left'>
      <h1>DSA Topics</h1>
      <ul className='dsa__list'>
        <li>Arrays</li>
        <li>Linked Lists</li>
        <li>Stacks and Queues</li>
        <li>Trees</li>
        <li>Graphs</li>
        <li>Dynamic Programming</li>
        <li>Hashing</li>
        <li>Sorting and Searching</li>
        <li>Backtracking</li>
        <li>Greedy Algorithms</li>
      </ul>
    </div>
    <div className='dsa__right'>
      <h1>Frequently Asked LeetCode Questions</h1>
      <div className='dsa__question'>
        <h2>1. Arrays</h2>
        <ul>
          <li>Two Sum</li>
          <li>Best Time to Buy and Sell Stock</li>
          <li>Maximum Subarray</li>
          <li>Product of Array Except Self</li>
          <li>Find the Duplicate Number</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>2. Linked Lists</h2>
        <ul>
          <li>Reverse Linked List</li>
          <li>Merge Two Sorted Lists</li>
          <li>Linked List Cycle</li>
          <li>Remove Nth Node From End of List</li>
          <li>Palindrome Linked List</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>3. Stacks and Queues</h2>
        <ul>
          <li>Valid Parentheses</li>
          <li>Implement Queue using Stacks</li>
          <li>Min Stack</li>
          <li>Generate Parentheses</li>
          <li>Daily Temperatures</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>4. Trees</h2>
        <ul>
          <li>Binary Tree Inorder Traversal</li>
          <li>Maximum Depth of Binary Tree</li>
          <li>Validate Binary Search Tree</li>
          <li>Symmetric Tree</li>
          <li>Lowest Common Ancestor of a Binary Tree</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>5. Graphs</h2>
        <ul>
          <li>Number of Islands</li>
          <li>Course Schedule</li>
          <li>Clone Graph</li>
          <li>Word Ladder</li>
          <li>Graph Valid Tree</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>6. Dynamic Programming</h2>
        <ul>
          <li>Climbing Stairs</li>
          <li>Coin Change</li>
          <li>Longest Increasing Subsequence</li>
          <li>House Robber</li>
          <li>Longest Palindromic Substring</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>7. Hashing</h2>
        <ul>
          <li>Two Sum</li>
          <li>Group Anagrams</li>
          <li>Top K Frequent Elements</li>
          <li>Valid Anagram</li>
          <li>Subarray Sum Equals K</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>8. Sorting and Searching</h2>
        <ul>
          <li>Merge Intervals</li>
          <li>Search in Rotated Sorted Array</li>
          <li>Find First and Last Position of Element in Sorted Array</li>
          <li>Median of Two Sorted Arrays</li>
          <li>Sort Colors</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>9. Backtracking</h2>
        <ul>
          <li>Subsets</li>
          <li>Combination Sum</li>
          <li>Permutations</li>
          <li>Word Search</li>
          <li>N-Queens</li>
        </ul>
      </div>
      <div className='dsa__question'>
        <h2>10. Greedy Algorithms</h2>
        <ul>
          <li>Jump Game</li>
          <li>Gas Station</li>
          <li>Candy</li>
          <li>Non-overlapping Intervals</li>
          <li>Partition Labels</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
