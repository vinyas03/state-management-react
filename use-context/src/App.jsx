import React from "react";
import FunctionContext from "./FunctionContext";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContext />
    </ThemeProvider>
  );
};

export default App;

/*
  Context is broken into two sections:
    context.Provider
      - Wraps all of the code that needs access to the context
      - Passes a value, which is essentially the context value
    context.Consumer
      - Inside this, we pass in a function 
        -- that takes in the context value and
        -- returns what to render (e.g., a div with a style based on the context)
*/
