import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.toDoList.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
}

export default TodoList;
