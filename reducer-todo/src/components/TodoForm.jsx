import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

function TodoForm() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    setText(e.target.value);
  };

  const addItem = item => {
    const newItem = {
      item: item,
      id: Date.now(),
      completed: false
    };

    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const addTodo = e => {
    e.preventDefault();
    addItem(text);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="item" value={text} onChange={handleChange} />
        <button type="submit" name="addTodo">
          Add Todo
        </button>
        <button name="clearCompleted">Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
