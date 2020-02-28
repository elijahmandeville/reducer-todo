import React, { useReducer } from "react";
import Todo from "./Todo";
import { initialState, reducer } from "../reducers/reducer";

function TodoList(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("PROPS", initialState.tasks);
  return (
    <div>
      <h1 onClick={() => console.log(initialState.tasks)}>List content</h1>
      {initialState.tasks.map((item, index) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
}

export default TodoList;
