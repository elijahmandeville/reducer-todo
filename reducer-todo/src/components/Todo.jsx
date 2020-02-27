import React from "react";

function Todo(props) {
  console.log("TODO", props.todo.item);
  return (
    <div>
      <p>{props.todo.item}</p>
    </div>
  );
}

export default Todo;
