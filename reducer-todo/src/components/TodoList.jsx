import React, { useReducer } from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      <h1 onClick={() => console.log(props.todos.tasks)}>List content</h1>
      {props.todos.tasks.map((item, index) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
}

export default TodoList;
