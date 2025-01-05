# React useEffect Cleanup and Conditional Rendering Bug

This repository demonstrates a common bug in React involving the `useEffect` hook and conditional rendering. The bug arises from two issues: 

1. **Missing Cleanup Function:** The `useEffect` hook lacks a return statement for the cleanup function, which can lead to memory leaks, particularly when dealing with subscriptions or timers. 
2. **Incorrect Conditional Rendering:** The conditional logic within `useEffect` is incomplete and may not reflect the intended behavior. This can cause unexpected side effects.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server. 
4. Observe the console logs and component behavior to understand the problem.

## Solution

The solution involves adding a cleanup function to the `useEffect` hook and improving the conditional rendering logic for accuracy and efficiency.