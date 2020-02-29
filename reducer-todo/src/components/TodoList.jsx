import React from "react";
import Todo from "./Todo";
import { initialState } from "../reducers/reducer";

function TodoList(props) {
  return (
    <div>
      <h1 onClick={() => console.log(initialState.tasks)}>List content</h1>
      {props.state.tasks.map((item, index) => {
        return <Todo key={item.id} todo={item} dispatch={props.dispatch} />;
      })}
    </div>
  );
}

export default TodoList;
