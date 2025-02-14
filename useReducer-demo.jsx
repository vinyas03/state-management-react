import { useState, useReducer } from "react";
// /*
// An alternative to useState.

// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. 
// It also lets you optimize performance for components
// that trigger deep updates because you can pass dispatch down instead of callbacks.
// */
// import "./App.css";

// function reducer(count, action) {
//   switch (action.type) {
//     case "increment":
//       return count + 1;
//     case "decrement":
//       return count - 1;
//     case "reset":
//       return 0;
//     case "change-count":
//       return count + action.payload.amount;
//     default:
//       return count;
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button
//         onClick={() => {
//           dispatch({ type: "change-count", payload: { amount: 5 } });
//         }}>
//         Add 5
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </>
//   );
// }
// export default App;




// Define the initial state
const initialState = {
  todos: [],
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { text: action.payload, completed: false }] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((_, index) => index !== action.payload) };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //todos state
  const [inputValue, setInputValue] = useState(''); //new todo

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  const handleToggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Add the onKeyDown event
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            {todo.text}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
