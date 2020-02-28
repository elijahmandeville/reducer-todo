export const initialState = {
  tasks: [
    {
      item: "Initial Item",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state.tasks);
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};
