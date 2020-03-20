import React from "react";

function Todo(props) {
  console.log("TODO", props.todo);
  return (
    <div>
      <p
        onClick={() =>
          props.dispatch({ type: "TOGGLE_ITEM", payload: props.todo.id })
        }
      >
        {props.todo.item}
      </p>
    </div>
  );
}

export default Todo;
