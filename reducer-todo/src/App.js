import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <TodoForm />
      <TodoList todos={state} />
    </div>
  );
}

export default App;
