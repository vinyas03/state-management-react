# Introduction to useContext

## What is useContext?

`useContext` is a React hook that allows you to access the context for a component without needing to wrap it in a `Context.Consumer`. It provides a way to share values (like state or functions) between components without having to pass props down manually at every level.

## When to Use useContext

You might want to use `useContext` in the following scenarios:

- When you have global data that needs to be accessed by many components, such as user authentication, theme settings, or language preferences.
- When you want to avoid "prop drilling," which is the process of passing data through many layers of components.
- When you want to create a more modular and maintainable codebase by separating concerns.

## Creating a Context

Before using `useContext`, you need to create a context using `React.createContext()`. This will provide a way to share values across components.

### Example of Creating a Context

```javascript
import React from 'react';

const MyContext = React.createContext();
