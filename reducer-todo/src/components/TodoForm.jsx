import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={text} onChange={handleChange} />
        <button
          onClick={() => props.dispatch({ type: "ADD_ITEM", payload: text })}
          name="addTodo"
        >
          Add Todo
        </button>
        <button
          name="clearCompleted"
          onClick={() => props.dispatch({ type: "CLEAR_SELECTED" })}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
