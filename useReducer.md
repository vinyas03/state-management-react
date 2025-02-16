# Introduction to useReducer

## What is useReducer?

`useReducer` is a React hook that is used for managing complex state logic in functional components. It is an alternative to `useState` and is particularly useful when the state depends on previous state values or when the state logic is complex.

## When to Use useReducer

You might want to use `useReducer` in the following scenarios:

- When you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
- When you want to manage state in a more predictable way, similar to Redux.
- When you want to encapsulate state management logic in a single function.

## Basic Syntax

The `useReducer` hook takes two arguments:

1. A reducer function that determines how the state should change based on the action.
2. An initial state.

It returns an array containing the current state and a dispatch function to send actions to the reducer.

### Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
